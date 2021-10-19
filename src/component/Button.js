

export default function Button({label,onClick,color}) {
    return (
    
            <button className={`${color} p-2 text-white float-left mt-5 rounded-lg w-full`} onClick={onClick}>{label}</button>
      
    )
}

Button.defaultProps = {
    color: 'bg-green-400'
}