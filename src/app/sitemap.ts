"use server";
import {  MetadataRoute } from 'next';
import { getPageMap } from 'nextra/page-map';


export default async function Sitemap():Promise<MetadataRoute.Sitemap>{
    const pageMap = await getPageMap();
    console.log(pageMap);
   return [
    {
        url: "/"
    }
   ]}