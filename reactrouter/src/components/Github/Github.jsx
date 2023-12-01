import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Github() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/119kanika')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])

    return (
        <div className="text-center m-4 bg-gray-600 text-whitep-4 text-3xl">Github Followers: {data.followers}
            <img src={data.avatar_url} alt="Github picture" width={300} />
        </div>
    )
}

export default Github