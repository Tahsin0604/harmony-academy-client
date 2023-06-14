import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import Container from "../../../components/Container";
import useRole from "../../../hooks/useRole";
import StudentState from "./StudentState";
import AdminState from "./AdminState";
import InstructorState from "./InstructorState";

const Profile = () => {
  const { user, loading } = useAuth();
  const [role, roleLoading] = useRole();
  const [secure] = useAxiosSecure();
  const { data: profile, isLoading: profileLoading } = useQuery({
    queryKey: ["users", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await secure(`/users/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  if (profileLoading || roleLoading) {
    <div className="flex justify-center">
      <progress className="progress w-56  mt-10 dark:bg-white"></progress>
    </div>;
  }
  return (
    <div className="mt-16 ">
      <Helmet>
        <title>{`Harmony Academy | ${profile?.name}`}</title>
      </Helmet>
      <Container>
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="200"
          className="flex flex-col lg:flex-row gap-6  lg:items-center px-6"
        >
          <div>
            <img
              src={profile?.image}
              alt="Image"
              className="w-44 h-44 rounded-full"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-slate-500 dark:text-white text-xl mb-1 uppercase">
              {profile?.role}
            </h1>
            <h1 className="capitalize text-5xl font-yanoneKaffeesatz ">
              {profile?.name}
            </h1>
            <p className=" text-lg font-yanoneKaffeesatz ">{profile?.email}</p>
          </div>
        </div>

        <div className="px-6">
          {role === "student" && <StudentState></StudentState>}
          {role === "admin" && <AdminState></AdminState>}
          {role === "instructor" && <InstructorState></InstructorState>}
        </div>
      </Container>
    </div>
  );
};

export default Profile;
