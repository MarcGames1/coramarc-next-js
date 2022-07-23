import { useContext, useState, useEffect } from "react"
import { OffCanvasSearchContext } from "../../context/offCanvasSearchContext/offCanvasSearchContext"

const OffcanvasSearchForm = () =>{
const [show, hideSearch, showSearch] = useContext(OffCanvasSearchContext)
const [searchValue, setSearchValue] = useState('')

const handleSearchChange = async (e)=>{
    e.preventDefault()
    setSearchValue(e.target.value)
    console.log(searchValue)
}
const resetInputField = () =>{
    setSearchValue('')
}


    const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log("FORM SUBMITED WITH VALUE => ",searchValue)
    resetInputField()
}
useEffect(() =>{
    if(show !=="show"){
       resetInputField()
    }
    
}, [show])
    return (<>
        {/* <!-- offcanvas search form start --> */ }
    < div className="offcanvas-search-wrapper " >
            <div className={`offcanvas-search-inner ${show}`}>
            <div 
                    onClick={hideSearch}
                
            className="offcanvas-close">
                    <i className="fa fa-close"></i>
                </div>
                <div className="container">
                    <div className="offcanvas-search-box">
                        <form onSubmit={handleSubmit}  className="d-flex bdr-bottom w-100">
                            <input onChange={handleSearchChange} type="text" placeholder="Cauta Produse..." value={searchValue} name="search"/>
                            <button className="search-btn"><i className="fa fa-search"></i>Cauta</button>
                        </form>
                    </div>
                </div>
            </div>
            </div >
    {/* <!-- offcanvas search form end --> */ }
</>)
}


export default OffcanvasSearchForm;