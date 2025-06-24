import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase"; // Adjust based on your path
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // path as per your structure

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const querySnapshot = await getDocs(collection(db, "skills"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSkills(data);
    };

    fetchSkills();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Skills</h2>
      <ul className="grid grid-cols-2 gap-4">
        {skills.map(skill => (
          <li key={skill.id} className="p-2 bg-gray-100 rounded">
            <strong>{skill.title}</strong> - {skill.level}
          </li>
        ))}
      </ul>
    </div>
  );
}
