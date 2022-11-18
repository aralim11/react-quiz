import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";


function useQuestions(videoID){
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchQuestions(){
            const db = getDatabase();
            const quizRef = ref(db, "quiz/" + videoID + "/questions");
            const quizQuery = query(
                quizRef,
                orderByKey()
            );

            try {
                setError(false);
                setLoading(true);
                const snapshot = await get(quizQuery);
                setLoading(false);
                if (snapshot.exists()) {
                    setQuestions((prevQuestions) => {
                        return [...prevQuestions, ...Object.values(snapshot.val())];
                    })
                }
            } catch (error) {
                setLoading(false);
                setError(true)
            }
        }

        fetchQuestions();
    }, [videoID]);

    return{
        questions,
        error,
        loading,
    }
}

export default useQuestions;