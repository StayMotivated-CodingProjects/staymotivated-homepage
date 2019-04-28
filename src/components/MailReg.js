import React from 'react'


function MailReg(props){
    return(
        <div className="regField">
            <form>
                <input id="inpField" placeholder={props.fieldText}/>
                <button id="subButton" type="submit" value="Submit">Submit</button>
            </form>
        </div>
    )
}

export default MailReg;