import {FormEvent, useState} from "react";
import {useSearchActivities} from "../hooks/UseAllActivities";
import {type} from "@testing-library/user-event/dist/type";
//search bykeyword
const SearchActivity = () => {
    const [keyword, setKeyword] = useState("");
    const {data, isLoading, error} = useSearchActivities(keyword);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setKeyword(keyword);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
            </form>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {data && (
                <div>
                    {data.map((activity) => (
                        <div key={activity.id}>
                            <h3>{activity.name}</h3>
                            <p>{activity.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export {SearchActivity};




