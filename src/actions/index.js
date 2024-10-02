'use server'

import connectToDB from "@/database"
import Profile from "@/models/profile";
import { revalidatePath } from "next/cache";


//create profile action
export async function createProfie(formData, pathToRevalidate) {
    await connectToDB();
    await Profile.create(formData);
    revalidatePath(pathToRevalidate);
}

export async function fetchProfileAction(id) {
    await connectToDB();
    const res = await Profile.findOne({userId: id})

    return JSON.parse(JSON.stringify(res));
}
