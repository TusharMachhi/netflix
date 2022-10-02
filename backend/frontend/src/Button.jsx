const Button = (props)=>{
    
    return (
        <>
        <button disabled={props.disabled} className={props.className} > {props.children}</button>
        </>
    )
}
export default Button;