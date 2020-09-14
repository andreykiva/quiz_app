import axios from "axios";

export default axios.create({
    baseURL: "https://react-quiz-8219d.firebaseio.com/"
})