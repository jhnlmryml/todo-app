// import React, {useState} from 'react'
//
// const Header = () => {
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(form);
//     }
//     const [form, setForm] = useState({
//         title: '',
//         description: '',
//         status: '',
//         createdAt: new Date(),
//
//     })
//     const handleChange = ({target: {name, value}}) => {
//         setForm({...form, [name]: value});
//     }
//
//     // console.log(form)
//
//     return (
//         <header className="flex items-center justify-center w-full p-10">
//             <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
//
//                 <input onChange={handleChange} type="text" placeholder="Enter Title" value={form.title} name="title" required/>
//                 <textarea onChange={handleChange} placeholder="Description" required value={form.description} name="description" />
//                 <select onChange={handleChange} className="flex flex-col gap-5" value={form.status} required name="status">
//                     <option value="todo">To Do</option>
//                     <option value="doing">Doing</option>
//                     <option value="done">Done</option>
//                 </select>
//                 <button
//
//                     type="submit"
//                     className="cursor-pointer border"> Add Task
//                 </button>
//
//             </form>
//         </header>
//     )
// }
// export default Header
