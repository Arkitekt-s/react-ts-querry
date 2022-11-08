import {createActivity, getAllActivities,deleteActivityById} from "../api/AxiosActivities";
import { useQuery,UseQueryResult,useMutation} from "react-query"
import {FormEvent, useState} from "react"
import {useAllActivities, useDeleteActivityById} from "../hooks/UseAllActivities";
import image from "../../src/svg/Photo/gokart.jpg"



import {DeleteById} from "./DeleteById";



//get all activities by id
 const Activities =()=> {
     //read all data from api
     const[id,setId] = useState<number|"">("");
    const {data:activity,isLoading} = useAllActivities()
     //deletbyid(id as number)
     const{mutateAsync} = useDeleteActivityById(id as number)
     const handleSubmit = (event: FormEvent) => {
         event.preventDefault();
         mutateAsync(id as number)
             .then((response) => {
             })
             .catch((error) => {
             });
     };

     return (
            <div>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {activity?.map((activity) => (
                        <tr key={activity.id}>
                            <td>{activity.id}</td>
                            <td>{activity.name}</td>
                            <td>{activity.description}</td>
                            <td><img
                                src={`../../src/svg/Photo/${activity.imageName}` }
                                alt={activity.imageName}/></td>




                            {/*//image with path from api*/}



                            <td>
                                <form onSubmit={handleSubmit}>
                                    {/*get id from table*/}

                                    <button type="submit" value={activity.id} className="btn btn-danger" >Delete</button>
                                </form>


                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }




export {Activities}
