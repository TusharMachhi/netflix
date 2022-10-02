import {navdata} from './navdata'
const Navdet= ()=>{
    const nav = navdata.map((el)=>{
        return el.name
    })
    return(
        
        <>
        <ul>
            <li>{nav}</li>
        </ul>
        </>
    )
}
export default Navdet