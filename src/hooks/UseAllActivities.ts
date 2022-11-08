import {
    createActivity,
    getAllActivities,
    updateActivity,
    deleteActivityById,
    getActivitiesByID,
    searchActivities
} from "../api/AxiosActivities";
import {useQuery, useMutation, useQueryClient} from "react-query"
//its important to open the .ccs file and add the following code toastify:
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Activity} from "../api/DbModels";


//search by keyword
export const useSearchActivities = (keyword: string) => {
    return useQuery<Activity[],Error>(
        ["activities", keyword],// query key
        () => searchActivities(keyword),
        //enabled: !!keyword means if keyword is not empty then enabled is true
        {enabled: !!keyword,



        }

        // fetching function
    )
}








export const useAllActivities = () => {
    return useQuery<Activity[],Error>(
        "activities",// query key
        getAllActivities    // fetching function
    )
}
export const useActivityById = (id: number) => {
    return useQuery<Activity,Error>(
        ["activityBYId", id],// query key
        () => getActivitiesByID(id)    // fetching function
    )
}
//delete by id and update cache after delete is successful

export const useDeleteActivityById = (id:number) => {
    const queryClientDelete = useQueryClient();
    return useMutation<Activity,Error, number>(
        deleteActivityById,
        {
            //refresh all activities after delete

            onSuccess: () => {


                queryClientDelete.invalidateQueries("activities")
                toast.success("Activity deleted successfully")

            },
            onError: () => {
                toast.error("Activity delete failed")

            }
        }
    )
}
//update activity and update cache after successful update
//update activity
export const useUpdateActivity = (id:number) => {
    const queryClientUpdate = useQueryClient();
    return useMutation<Activity,Error, Activity>(
        (data: Activity) => updateActivity(id, data),
        {
            //refresh all activities after update

            onSuccess: () => {
                //queryClientUpdate.invalidateQueries means refresh the cache
                //{stale: true} means refresh the cache even if the data is not stale
                queryClientUpdate.invalidateQueries("activities" )
                toast.success("Activity updated successfully")



            },
            onError: () => {


                    toast.error("Error updating activity")


                }


            }
        )
    }


//create
export const useCreateActivity = () => {
    const queryClientCreate = useQueryClient();
    return useMutation<Activity,Error, Activity>(
        createActivity,
        {
            onSuccess: () => {

                queryClientCreate.invalidateQueries("activities")
                toast.success("Activity created successfully")

                },

            onError: () => {


            }
        }
    )

}





