import { useState } from "react"

function Login() {
    const [count, setCount] = useState(0);
    return(
        <div>
            <h1>Kanella Skin</h1>
            <img src="https://mundopack-tv.com/wp-content/uploads/2024/11/IMG_20241126_031013_202.jpg" />
            <br />
            <p>contador:_{count}</p>
            <button onClick={() => setCount((count) => count + 1)}>Siguiente</button>
        </div>
    )
}
export default Login