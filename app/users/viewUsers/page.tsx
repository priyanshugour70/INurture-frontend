"use client"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import { useEffect, useState } from "react";

interface UsersDataProps {
    id: number;
    name: string;
    email: string;
}


const page = () => {

    const [users, setUsers] = useState<UsersDataProps[]>([]);

    useEffect(() => {
        // Make an HTTP GET request to your Flask backend to fetch user data
        fetch("http://localhost:5000/users")
            .then((response) => response.json())
            .then((data) => {
                // Set the fetched data in the state
                setUsers(data);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }, []);

    return (
        <>
            <Breadcrumb pageName="Users" />

            <div className="flex flex-col gap-10">
                <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                    <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                        Our Users
                    </h4>

                    <div className="flex flex-col">
                        <div className="grid grid-cols-2 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-2">
                            <div className="p-2.5 text-center xl:p-5">
                                <h5 className="text-sm font-medium uppercase xsm:text-base">
                                    Name
                                </h5>
                            </div>
                            <div className="p-2.5 text-center xl:p-5">
                                <h5 className="text-sm font-medium uppercase xsm:text-base">
                                    Email
                                </h5>
                            </div>
                        </div>
                        {users.map((user) => (
                            <div
                                className={`grid grid-cols-2 sm:grid-cols-2 hover:bg-graydark dark:hover:bg-meta-4`}
                                key={user.id}
                            >
                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="text-black dark:text-white">{user.name}</p>
                                </div>

                                <div className="flex items-center justify-center p-2.5 xl:p-5">
                                    <p className="text-meta-3">{user.email}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
