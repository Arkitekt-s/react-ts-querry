import {Button, Form} from "react-bootstrap";
import {Activity, Instructor} from "../api/DbModels";
import {FormEvent, useState} from "react";
import {useCreateActivity} from "../hooks/UseAllActivities";
import {toast, ToastContainer} from "react-toastify";




const CreatActivity = () => {
    const {data,isLoading,mutateAsync} = useCreateActivity();
    //use mutedAsync to create new activity
    const[activityName,setActivityName] = useState("");
    const[activityDescription,setActivityDescription] = useState("");
    const[activityImageName,setActivityImageName] = useState("");
    const[instructor,setInstructor] = useState<Instructor|null>(null);

    const handleCreate = (e: FormEvent) => {
        e.preventDefault();
        mutateAsync({
            description: activityDescription,
            imageName: activityImageName,
            name: activityName,





        })
            .then((response) => {

            })
            .catch((error) => {

            });
    }
    return (
        <div className="wrapper">

            <Form onSubmit={handleCreate}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Activity Name</Form.Label>
                    <Form.Control type="text"
                                        placeholder="Enter activity name"

                                        value={activityName}
                                        onChange={(e) => setActivityName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Activity Description</Form.Label>
                    <Form.Control type="text"
                                        placeholder="Enter activity description"
                                        value={activityDescription}
                                        onChange={(e) => setActivityDescription(e.target.value)}/>

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Activity Image</Form.Label>
                    <Form.Control type="text"
                                        placeholder="Enter activity image"
                                        value={activityImageName}
                                        onChange={(e) => setActivityImageName(e.target.value)}/>
                   </Form.Group>

                <Button variant="success" type="submit">
                    Create
                </Button>

            </Form>

        </div>


    );

}
export{CreatActivity};


