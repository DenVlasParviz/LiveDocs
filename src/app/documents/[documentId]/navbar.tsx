"use client"

import Image from "next/image"
import Link from "next/link";
import {DocumentInput} from "@/app/documents/[documentId]/document-input";


import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger
} from "@/components/ui/menubar";
import {
    BoldIcon,
    FileIcon,
    FileJsonIcon,
    FilePenIcon,
    FilePlusIcon,
    FileTextIcon,
    GlobeIcon, ItalicIcon,
    PrinterIcon, Redo2Icon, RemoveFormattingIcon, TextIcon,
    TrashIcon, UnderlineIcon, Undo2Icon
} from "lucide-react";
import {BsFilePdf} from "react-icons/bs";

export const Navbar = () => {
    return (
        <nav className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <Link href='/'>
                    <Image src="/next.svg" alt='Logo' width={36} height={36}></Image>

                </Link>
                <div className='flex flex-col'>
                    <DocumentInput/>
                    <div className='flex'>
                        <Menubar className='border-none bg-white shadow-none h-auto p-0'>
                            <MenubarMenu>
                                <MenubarTrigger
                                    className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
                                    File
                                </MenubarTrigger>
                                <MenubarContent className='bg-white print:hidden '>
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <FileIcon className='size-4 mr-2'/>
                                            Save
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem>
                                                <FileJsonIcon className='size-4 mr-2'/>
                                                JSON
                                            </MenubarItem>
                                            <MenubarItem>
                                                <GlobeIcon className='size-4 mr-2'/>
                                                HTML
                                            </MenubarItem>
                                            <MenubarItem>
                                                <BsFilePdf className='size-4 mr-2'/>
                                                PDF
                                            </MenubarItem>
                                            <MenubarItem>
                                                <FileTextIcon className='size-4 mr-2'/>
                                                TEXT
                                            </MenubarItem>

                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarItem>
                                        <FilePlusIcon className='size-4 mr-2'/>
                                        New Document
                                    </MenubarItem>
                                    <MenubarSeparator/>
                                    <MenubarItem>
                                        <FilePenIcon className='size-4 mr-2'/>
                                        Rename
                                    </MenubarItem>
                                    <MenubarItem>
                                        <TrashIcon className='size-4 mr-2'/>
                                        Remove
                                    </MenubarItem>
                                    <MenubarSeparator/>
                                    <MenubarItem onClick={() => window.print()}>
                                        <PrinterIcon className='size-4 mr-2'/>
                                        Print
                                        <MenubarShortcut>Ctrl P</MenubarShortcut>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>

                            <MenubarMenu>
                                <MenubarTrigger
                                    className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
                                    Edit
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>
                                        <Undo2Icon className='size-4 mr-2'/>
                                        Undo
                                        <MenubarShortcut>
                                            Ctrl Z
                                        </MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>
                                        <Redo2Icon className='size-4 mr-2'/>
                                        Redo
                                        <MenubarShortcut>
                                            Ctrl Z
                                        </MenubarShortcut>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger
                                    className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
                                    Insert
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <MenubarSubContent>
                                                <MenubarItem>
                                                    1x1
                                                </MenubarItem>
                                                <MenubarItem>
                                                    2x2
                                                </MenubarItem>
                                                <MenubarItem>
                                                    3x3
                                                </MenubarItem>
                                            </MenubarSubContent>
                                        </MenubarSubTrigger>
                                    </MenubarSub>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger
                                    className='text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
                                    Format
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <TextIcon className='size-4 mr-2'/>
                                            Text
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem>
                                                <BoldIcon className='size-4 mr-2'/>
                                                Bold
                                            </MenubarItem>
                                            <MenubarItem>
                                                <ItalicIcon className='size-4 mr-2'/>
                                                Italic
                                            </MenubarItem>
                                            <MenubarItem>
                                                <UnderlineIcon className='size-4 mr-2'/>
                                                Underline
                                            </MenubarItem>
                                        </MenubarSubContent>

                                    </MenubarSub>
                                    <MenubarItem>
                                        <RemoveFormattingIcon className='size-4 mr-2'/>
                                        Clear formatting
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>


                    </div>
                    {/*    MenuBar*/}
                </div>
            </div>

        </nav>
    )
}