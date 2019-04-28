import React from 'react'

import '../css/components.css'

function MenueList(props){

    return(
        <div>
            <ul>
                <li>
                    <span>
                        <a href={props.link} target="_blank">
                            <i class={props.picUrl}></i>
                        </a>
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default MenueList