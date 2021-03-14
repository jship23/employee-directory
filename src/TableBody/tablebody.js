import React from "react";

function TableBody(props) {
    const { result, index } = props;

    return(
        <tr>
            <td>
                <img alt="headshot" src={result.picture.large} />
            </td>

            <td>
                {result.name.first} {result.name.last}
            </td>

            <td>
                {new Date(result.dob.date).toLocaleDateString()}
            </td>

            <td>
                {result.phone}
            </td>

            <td>
                {result.email}
            </td>
        </tr>
    )
};

export default TableBody;