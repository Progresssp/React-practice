import { useState, useEffect } from "react";

function ProfileCard() {
    const {profile, seeProfile} = useState(null);
    const {loading, seeLoading} = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            seeProfile({
                name: "Ogboi progress",
                email: "ogboi@progress.com",
                city: "Lagos",
            });

            SeeLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
}, []);

if (loading) {
    return <h2>Loading...</h2>;
}

return (
    <div>
        <h2>Profile Card</h2>
        <p><strong>Name:</strong>{profile.name} </p>
        <p><strong>Email:</strong>{profile.email} </p>
        <p><strong>City:</strong>{profile.city} </p>
    </div>
);
}


export default ProfileCard;