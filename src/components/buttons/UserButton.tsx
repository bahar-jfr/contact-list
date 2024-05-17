

export function UserButton({onDelete,onEdit}:{onDelete:()=>Promise<void>,onEdit:()=>void}){
    return(
        <div className="flex items-center text-white justify-end ">
            <button className="bg-blue-500 px-3.5 py-1.5 rounded-r-md" onClick={onEdit}>ویرایش</button>
            <button className="bg-red-500 px-3.5 py-1.5 rounded-l-md" onClick={onDelete}>حذف</button>
        </div>
    )
}