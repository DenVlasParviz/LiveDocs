import {Id} from "../../../../convex/_generated/dataModel";
import {Document} from "./document"
import {preloadQuery} from "convex/nextjs";
import {auth} from "@clerk/nextjs/server"
import {api} from "../../../../convex/_generated/api";

interface DocumentIdPageProps{
  params: Promise<{documentId:Id<"documents">}>
}

const documentIdPage= async ({params}:DocumentIdPageProps)=>{
  const {documentId} = await params;
const {getToken} = await auth();
const token = await getToken({template:"convex"}) ?? undefined;
if(!token) throw new Error("Unathorized");
  const preloaded= await preloadQuery(
      api.documents.getById,
      {id:documentId},
      {token}
  )
  return(
<Document preloadedDocument={preloaded}/>
  )
}
export default documentIdPage;