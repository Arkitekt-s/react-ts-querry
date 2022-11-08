import {Button, Form} from "react-bootstrap";
import {Activity, Instructor} from "../api/DbModels";
import {FormEvent, useState} from "react";
import {useCreateActivity, useUpdateActivity} from "../hooks/UseAllActivities";
import {toast, ToastContainer} from "react-toastify";

//update activity with id
const UpdateActivity = () => {
    const[id,setId] = useState<number|"">("");
    //as means that id is number and its not string  Type Assertion
    const {data,isLoading,mutateAsync} = useUpdateActivity(id as number);



    //use mutedAsync to create new activity

    const[activityName,setActivityName] = useState("");
    const[activityDescription,setActivityDescription] = useState("");
    const[activityImageName,setActivityImageName] = useState("");
    const[instructor,setInstructor] = useState<Instructor|null>(null);
    const handleCreate = (e: FormEvent) => {
        e.preventDefault();
        mutateAsync({
            id: id as number,
            description: activityDescription,
            imageName: activityImageName,
            name: activityName,
        })
            .then((response) => {


            })
            .catch((error) => {
                //if id can not find


            });
    }
    return (
        <div className="Create">
            <Form onSubmit={handleCreate}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="number"
                                  placeholder="Enter activity ID"
                                  value={id}
                                  onChange={(e) => setId(parseInt(e.target.value))} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Activity Name</Form.Label>
                    <Form.Control type="text"
                                        placeholder="Enter activity name"
                                  //defultvalue is used to show the data in the input box
                                        defaultValue={data?.name}
                                        value={activityName}

                                        onChange={(e) => setActivityName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Activity Description</Form.Label>
                    <Form.Control type="text"
                                        placeholder="Enter activity description"
                                  defaultValue={data?.description}
                                        value={activityDescription}
                                        onChange={(e) => setActivityDescription(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Activity Image</Form.Label>
                    <Form.Control type="text"
                                        placeholder="Enter activity image"
                                        defaultValue={data?.imageName}
                                        value={activityImageName}
                                        onChange={(e) => setActivityImageName(e.target.value)}/>
                </Form.Group>
                <Button variant="outline-success" type="submit">
                    Update Activity
                </Button>


            </Form>
        </div>
    )
}
export {UpdateActivity};