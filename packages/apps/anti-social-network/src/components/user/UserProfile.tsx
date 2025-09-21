import React from 'react';
// import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = ({ user }: any) => {
  // const { isAuthenticated } = useAuth0();
  const isAuthenticated = false;

  return (
    <div className="flex flex-col h-full items-center text-dull-secondary bg-dull-primary/90 rounded-md">
      <div className="-mt-24 border-8 rounded-full overflow-hidden border-pop-secondary">
        {user.picture && (
          <img
            src={user.picture}
            alt="Profile Image"
            className="w-44 h-fit object-cover"
          />
        )}
      </div>

      <div className="mt-4 text-xl font-semibold text-pop-primary">
        {user.name}
      </div>
      <div className="mt-1 py-1 px-2 text-sm text-pop-secondary bg-dull-primary rounded-full">
        {user.email}
      </div>

      <div className="w-3/4 mt-4 mb-12 text-center space-y-1 border-pop-primary border-t-2">
        {user.summary ? (
          <div className="mt-6 text-dull-secondary">{user.summary}</div>
        ) : (
          <div className="mt-6 text-dull-secondary">
            <div>@{user.nickname} | 29 | Fr</div>
            <div>WCIF friendly</div>
            {user['sam.co/roles'] && (
              <div>
                <div className="text-pop-primary">Roles: </div>
                <div> {user['sam.co/roles']}</div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex w-full mt-auto p-4 justify-around text-pop-primary border-pop-primary border-t-2">
        {isAuthenticated && (
          <div
            className={`fas fa-home text-2xl text-pop-primary hover:text-pop-secondary`}
          ></div>
        )}
        <div
          className={`fas fa-envelope text-2xl text-pop-primary hover:text-pop-secondary`}
        ></div>
        <div
          className={`fab fa-linkedin text-2xl text-pop-primary hover:text-pop-secondary`}
        ></div>
        <div
          className={`fas fa-phone text-2xl text-pop-primary hover:text-pop-secondary`}
        ></div>
      </div>
    </div>
  );
};

export default UserProfile;
