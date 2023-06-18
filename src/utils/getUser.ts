import { cache } from 'react';
import 'server-only'

export const getUser = cache(async (id: string) => {
   
    // return user

});

export const preload = (id: string) => {
    
    void getUser(id)

};

export default getUser
