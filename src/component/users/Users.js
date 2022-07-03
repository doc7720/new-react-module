import {useForm} from "react-hook-form";

import {createUser} from "../../services/user.service";


export default function Users() {

    const {register, handleSubmit, formState: {errors}} = useForm({

        defaultValues: {
            name: '',
            username: '',
            email: ''
        }
    })
        const submit = (object) => {
            createUser(object).then(data => console.log(data));
        }

    return (<div>

        <form onSubmit={handleSubmit(submit)}>
            <input type="text" {...register('name', {required: true})}/>
            {errors.name && <span>This field is required</span>}
            <input type="text" {...register('username', {required: true})}/>
            {errors.username && <span>This field is required</span>}
            <input type="text" {...register('email', {required: true})}/>
            {errors.email && <span>This field is required</span>}
            <button>Sent</button>
        </form>

    </div>)

}