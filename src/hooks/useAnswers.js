import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

function useAnswers(videoID) {
    const [answers, setAnswers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchAnswers() {
            const db = getDatabase();
            const answerRef = ref(db, "answers/" + videoID + "/questions");
            const answerQuery = query(answerRef, orderByKey());

            try {
                setLoading(true);
                setError(false);
                const snapshot = await get(answerQuery);
                if (snapshot.exists()) {
                    setAnswers((prevAnswers) => {
                        return [
                            ...prevAnswers,
                            ...Object.values(snapshot.val()),
                        ];
                    });
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }
        }

        fetchAnswers();
    }, [videoID]);

    return {
        answers,
        loading,
        error,
    };
}

export default useAnswers;
