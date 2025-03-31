import React, { useState, useRef } from 'react';
import { Button } from 'flowbite-react';
import {
    PhotoIcon,
    VideoCameraIcon,
    FaceSmileIcon,
    MapPinIcon,
    UserGroupIcon,
    TagIcon,
    GlobeAltIcon
} from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function CreatePost() {
    const [openModal, setOpenModal] = useState(false);
    const [postContent, setPostContent] = useState('');
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [privacy, setPrivacy] = useState('Public');
    const fileInputRef = useRef(null);
    const modalContentRef = useRef(null);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    // This will clear all data and close modal
    const handleCloseModal = () => {
        setOpenModal(false);
        setPostContent('');
        setSelectedFiles([]);
    };

    // This will only close the modal without clearing data
    const handleOutsideClick = (e) => {
        // Check if the click is on the backdrop and not inside the modal content
        if (modalContentRef.current && !modalContentRef.current.contains(e.target)) {
            setOpenModal(false);
        }
    };

    const handleContentChange = (e) => {
        setPostContent(e.target.value);
    };

    const handleFileChange = (e) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files).map(file => ({
                file,
                preview: URL.createObjectURL(file),
                type: file.type.startsWith('image') ? 'image' : 'video'
            }));
            setSelectedFiles(prev => [...prev, ...filesArray]);
        }
    };

    const removeFile = (indexToRemove) => {
        setSelectedFiles(prev => prev.filter((_, index) => index !== indexToRemove));
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = () => {
        // Here you would handle the actual post submission
        console.log({
            content: postContent,
            files: selectedFiles,
            privacy
        });

        // Clear data and close modal after successful submission
        handleCloseModal();
    };

    return (
        <div className='flex flex-col items-center'>
            <div className='border py-4 px-2 rounded-xl max-w-lg bg-white w-full'>
                <div className='flex items-center space-x-2 p-4'>
                    <img
                        src='https://via.placeholder.com/40'
                        alt='Profile'
                        className='rounded-full w-10 h-10'
                    />
                    <button
                        className='flex-grow bg-gray-100 rounded-full py-2 px-4 text-left text-gray-500 hover:bg-gray-200 focus:outline-none'
                        onClick={ handleOpenModal }
                    >
                        What's on your mind?
                    </button>
                </div>
                <div className='flex justify-around items-center border-t py-2'>
                    <button className='flex items-center space-x-2 hover:bg-gray-100 rounded-md py-2 px-4 focus:outline-none'>
                        <VideoCameraIcon className='h-5 w-5 text-red-500' />
                        <span>Live Video</span>
                    </button>
                    <button
                        className='flex items-center space-x-2 hover:bg-gray-100 rounded-md py-2 px-4 focus:outline-none'
                        onClick={ handleOpenModal }
                    >
                        <PhotoIcon className='h-5 w-5 text-green-500' />
                        <span>Photo/Video</span>
                    </button>
                    <button
                        className='flex items-center space-x-2 hover:bg-gray-100 rounded-md py-2 px-4 focus:outline-none'
                        onClick={ handleOpenModal }
                    >
                        <FaceSmileIcon className='h-5 w-5 text-yellow-500' />
                        <span>Feeling/Activity</span>
                    </button>
                </div>
            </div>

            { openModal && (
                <div
                    className='fixed z-10 inset-0 overflow-y-auto'
                    onClick={ handleOutsideClick }
                >
                    <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
                        <div className='fixed inset-0 transition-opacity' aria-hidden='true'>
                            <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
                        </div>

                        <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
                            &#8203;
                        </span>

                        <div
                            className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
                            ref={ modalContentRef }
                            onClick={ (e) => e.stopPropagation() } // Prevent clicks inside the modal from closing it
                        >
                            <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                                {/* Header with privacy setting */ }
                                <div className='flex justify-between items-center border-b pb-3'>
                                    <h3 className='text-lg leading-6 font-medium text-gray-900'>Create Post</h3>
                                    <div className='flex items-center space-x-2'>
                                        <GlobeAltIcon className='h-4 w-4 text-gray-500' />
                                        <select
                                            className='text-sm border-0 focus:ring-0 text-gray-600 font-medium'
                                            value={ privacy }
                                            onChange={ (e) => setPrivacy(e.target.value) }
                                        >
                                            <option>Public</option>
                                            <option>Friends</option>
                                            <option>Only me</option>
                                        </select>
                                    </div>
                                </div>

                                {/* User info */ }
                                <div className='flex items-center space-x-2 mt-4'>
                                    <img
                                        src='https://via.placeholder.com/40'
                                        alt='Profile'
                                        className='rounded-full w-10 h-10'
                                    />
                                    <div className='font-medium'>User Name</div>
                                </div>

                                {/* Post content */ }
                                <div className='mt-4'>
                                    <textarea
                                        className='w-full border-0 focus:ring-0 text-lg'
                                        rows='4'
                                        placeholder="What's on your mind?"
                                        value={ postContent }
                                        onChange={ handleContentChange }
                                    ></textarea>
                                </div>

                                {/* Media preview */ }
                                { selectedFiles.length > 0 && (
                                    <div className='mt-3 grid grid-cols-2 gap-2'>
                                        { selectedFiles.map((file, index) => (
                                            <div key={ index } className='relative'>
                                                { file.type === 'image' ? (
                                                    <img
                                                        src={ file.preview }
                                                        alt="Preview"
                                                        className='rounded-lg w-full h-32 object-cover'
                                                    />
                                                ) : (
                                                    <video
                                                        src={ file.preview }
                                                        className='rounded-lg w-full h-32 object-cover'
                                                        controls
                                                    />
                                                ) }
                                                <button
                                                    className='absolute top-1 right-1 bg-gray-800 bg-opacity-70 rounded-full p-1'
                                                    onClick={ () => removeFile(index) }
                                                >
                                                    <XMarkIcon className='h-4 w-4 text-white' />
                                                </button>
                                            </div>
                                        )) }
                                    </div>
                                ) }

                                {/* Add to post section */ }
                                <div className='mt-4 border rounded-lg p-3'>
                                    <div className='flex justify-between items-center'>
                                        <div className='font-medium text-gray-700'>Add to your post</div>
                                        <div className='flex space-x-2'>
                                            <button
                                                className='p-2 rounded-full hover:bg-gray-100'
                                                onClick={ triggerFileInput }
                                            >
                                                <PhotoIcon className='h-6 w-6 text-green-500' />
                                            </button>
                                            <input
                                                type="file"
                                                ref={ fileInputRef }
                                                onChange={ handleFileChange }
                                                accept="image/*,video/*"
                                                multiple
                                                className='hidden'
                                            />
                                            <button className='p-2 rounded-full hover:bg-gray-100'>
                                                <TagIcon className='h-6 w-6 text-blue-500' />
                                            </button>
                                            <button className='p-2 rounded-full hover:bg-gray-100'>
                                                <FaceSmileIcon className='h-6 w-6 text-yellow-500' />
                                            </button>
                                            <button className='p-2 rounded-full hover:bg-gray-100'>
                                                <MapPinIcon className='h-6 w-6 text-red-500' />
                                            </button>
                                            <button className='p-2 rounded-full hover:bg-gray-100'>
                                                <UserGroupIcon className='h-6 w-6 text-purple-500' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Actions - only Post button */ }
                            <div className='bg-gray-50 px-4 py-3 sm:px-6 flex justify-center'>
                                <Button
                                    color='primary'
                                    className='px-8'
                                    disabled={ !postContent.trim() && selectedFiles.length === 0 }
                                    onClick={ handleSubmit }
                                >
                                    Post
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ) }
        </div>
    );
}