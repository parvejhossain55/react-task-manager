import React from 'react'
import MasterLayout from '../components/MasterLayout/MasterLayout'
import { Suspense } from 'react';
import FullScreenLoader from '../components/MasterLayout/FullScreenLoader';
const Profile = React.lazy(() => import("../components/Profile"));

function ProfilePage() {
  return (
    <div>
        <MasterLayout>
            <Suspense fallback={<FullScreenLoader/>}>
                <Profile/>
            </Suspense>
        </MasterLayout>
    </div>
  )
}

export default ProfilePage