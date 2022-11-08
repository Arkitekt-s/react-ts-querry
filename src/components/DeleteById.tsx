import {FormEvent, useState} from "react";
import {useDeleteActivityById} from "../hooks/UseAllActivities";
import {Button, Form} from "react-bootstrap";


//DELETE BY ID
 const DeleteById = () => {
    const [id, setId] = useState<number|"">("");
    const {mutateAsync, isLoading,isError} = useDeleteActivityById(id as number);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        mutateAsync(id as number)
            .then((response) => {


            })
            .catch((error) => {

            });
    };

    return (
        <div className="delete">
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Id</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter activity ID"
                        defaultValue={id}
                        onChange={(event) => setId(parseInt(event.target.value))}
                    />
                </Form.Group>
                <Button variant="outline-danger" type="submit">
                    Delete
                </Button>
                {/*it should be in html otherwise toast will not work*/}




            </Form>
        </div>
    );
}

 export {DeleteById};
