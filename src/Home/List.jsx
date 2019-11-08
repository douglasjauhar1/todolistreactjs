import React from 'react';

function List(props) {

    return (
        <div className="checklist-ul">
            <ul className="checklist-ul">
                {

                    props.items.map((item, index) => <li key={index}><p>{item}</p></li>)

                }

            </ul>
        </div>
    )

}

export default List;