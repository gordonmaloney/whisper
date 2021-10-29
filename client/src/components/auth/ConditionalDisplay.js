import React from 'react'

export const ConditionalDisplay = () => {
    const user = JSON.parse(localStorage.getItem("profile"));

    return (
        <div>
            Is a@b/123 signed in:
            <br />
            
            {(user?.result?.googleId ||
          user?.result?._id) ? (
              <>YES</>
          ) : <>no</>
          }

        </div>
    )
}
