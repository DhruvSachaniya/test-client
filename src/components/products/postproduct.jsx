import axios from "axios";
import { useState } from "react";

export default function Postproduct() {
    const [values, setValues] = useState({
        title: "",
        description: "",
        price: "",
    });
    const [ imageFile, setFile ] = useState();

    const getImage = (e) => {
        setFile(e.target.files[0]);
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setValues({
            ...values,
            [name]: value,
        });
    }

    async function productPost(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("description", values.description);
        formData.append("price", values.price);
        formData.append("image", imageFile);

        try {
            const response = await axios({
                url: "/products",
                method: "post",
                headers: {
                    "Authorization": localStorage.getItem('jwt_token'),
                    "Content-Type": "multipart/form-data"
                },
                data: formData
            })

            if(response.status === 200) {
                console.log(response);
            } else {
                console.log('no');
            }

            setValues({
                title: "",
                description: "",
                price: "",
            });
            setFile();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h1>Add your product</h1>
            <form onSubmit={productPost}>
                <input
                    value={values.title}
                    onChange={handleChange}
                    name="title"
                    type="text"
                    placeholder="Title"
                />
                <input
                    value={values.description}
                    onChange={handleChange}
                    name="description"
                    type="text"
                    placeholder="Description"
                />
                <input
                    value={values.price}
                    onChange={handleChange}
                    name="price"
                    type="tel"
                    placeholder="Price"
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={getImage}
                    name="image"
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
