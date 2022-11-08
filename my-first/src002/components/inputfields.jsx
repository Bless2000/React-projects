function InputFields({itype, iplaceholder, title}) {
    return ( 
        <>
            <label>{title}: </label>
            <input type={itype} placeholder={iplaceholder} required/>
        </>
     );
}

export default InputFields;