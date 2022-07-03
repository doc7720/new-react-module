import {useForm} from "react-hook-form";

import {createComment} from "../../services/comment.service";


export default function Comments() {

    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: '',
            email: '',
            body: ''
        }
    });

    const submit = (object) => {
        createComment(object).then(data => console.log(data));
    }

    return (<div>

        <form onSubmit={handleSubmit(submit)}>
            <input type="text" {...register('name', {required: true})}/>
            {errors.name && <span>This field is required</span>}
            <input type="text" {...register('email', {required: true})}/>
            {errors.email && <span>This field is required</span>}
            <input type="text" {...register('body', {required: true})}/>
            {errors.body && <span>This field is required</span>}
            <button>Sent</button>
        </form>

    </div>)

}