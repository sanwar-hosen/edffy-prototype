import React, { useState, useRef } from "react";
import { Button } from "flowbite-react";
import {
	 PhotoIcon,
    UserGroupIcon,
    TagIcon,
    GlobeAltIcon,
    PaperClipIcon,
    DocumentTextIcon,
    DocumentIcon,
    TableCellsIcon,
    ChartBarIcon,
    PresentationChartBarIcon,
} from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import InputTag from "../InputTag/InputTag";

export default function CreatePost({ user }) {
	const [openModal, setOpenModal] = useState(false);
	const [postContent, setPostContent] = useState("");
	const [showTagInput, setShowTagInput] = useState(false);
	const [Tags, setTags] = useState([]);
	const [selectedMedia, setSelectedMedia] = useState([]);
	const [documents, setDocuments] = useState([]);
	const [privacy, setPrivacy] = useState("Public");
	const mediaInputRef = useRef(null);
	const modalContentRef = useRef(null);
	const documentInputRef = useRef(null);

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	// This will only close the modal without clearing data
	const handleOutsideClick = (e) => {
		// Check if the click is on the backdrop and not inside the modal content
		if (
			modalContentRef.current &&
			!modalContentRef.current.contains(e.target)
		) {
			setOpenModal(false);
		}
	};

	const handleContentChange = (e) => {
		setPostContent(e.target.value);
	};

	const handleMediaChange = (e) => {
		if (e.target.files) {
			const mediaArray = Array.from(e.target.files).map((file) => ({
				file,
				preview: URL.createObjectURL(file),
				type: file.type.startsWith("image") ? "image" : "video",
			}));
			setSelectedMedia((prev) => [...prev, ...mediaArray]);
		}
	};
	// Add this near handleMediaChange function (around line 60)
	const handleDocumentChange = (e) => {
		if (e.target.files) {
			const docsArray = Array.from(e.target.files).map((file) => ({
				file,
				name: file.name,
				size: file.size,
				type: file.type,
				extension: file.name.split('.').pop().toUpperCase(),
			}));
			setDocuments((prev) => [...prev, ...docsArray]);
		}
	};

	// Add this helper function near handleDocumentChange
	const formatFileSize = (bytes) => {
		return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
	};

	const getDocumentIcon = (extension) => {
		switch (extension.toLowerCase()) {
			case 'pdf':
				return <DocumentTextIcon className="h-8 w-8 text-red-500 flex-shrink-0" />;
			case 'doc':
			case 'docx':
				return <DocumentIcon className="h-8 w-8 text-blue-600 flex-shrink-0" />;
			case 'xls':
			case 'xlsx':
				return <TableCellsIcon className="h-8 w-8 text-green-600 flex-shrink-0" />;
			case 'csv':
				return <TableCellsIcon className="h-8 w-8 text-green-500 flex-shrink-0" />;
			case 'ppt':
			case 'pptx':
				return <PresentationChartBarIcon className="h-8 w-8 text-orange-500 flex-shrink-0" />;
			case 'txt':
				return <DocumentTextIcon className="h-8 w-8 text-gray-500 flex-shrink-0" />;
			default:
				return <PaperClipIcon className="h-8 w-8 text-blue-500 flex-shrink-0" />;
		}
	};
	// Add this near removeFile function
	const removeDocument = (indexToRemove) => {
		setDocuments((prev) => prev.filter((_, index) => index !== indexToRemove));
	};

	const removeFile = (indexToRemove) => {
		setSelectedMedia((prev) =>
			prev.filter((_, index) => index !== indexToRemove)
		);
	};

	const triggerMediaInput = () => {
		// First open the modal, then in the next render cycle trigger the file input
		if (!openModal) {
			setOpenModal(true);
			// Use setTimeout to ensure the modal is rendered before accessing the input
			setTimeout(() => {
				if (mediaInputRef.current) {
					mediaInputRef.current.click();
				}
			}, 100);
		} else if (mediaInputRef.current) {
			mediaInputRef.current.click();
		}
	};

	// Add a trigger function for document input
	const triggerDocumentInput = () => {
		if (!openModal) {
			setOpenModal(true);
			// Use setTimeout to ensure the modal is rendered before accessing the input
			setTimeout(() => {
				if (documentInputRef.current) {
					documentInputRef.current.click();
				}
			}, 100);
		} else if (documentInputRef.current) {
			documentInputRef.current.click();
		}
	};
	const handleSubmit = () => {
		// Create the post data object
		const postData = {
			id: Date.now(), // Add a unique ID
			content: postContent,
			media: selectedMedia.map(m => ({
				type: m.type,
				name: m.file?.name || 'image',
				preview: m.preview // Keep preview URL for display
			})),
			documents: documents.map(d => ({
				name: d.name,
				extension: d.extension,
				size: d.size
			})),
			privacy,
			tags: Tags,
			timestamp: new Date().toISOString(),
			user: {
				name: user.displayName,
				id: user.uid,
				photo: user.photoURL
			}
		};

		console.log(postData);
		
		// // Create a blob with JSON data
		// const blob = new Blob([JSON.stringify(postData, null, 2)], { type: 'application/json' });
		// const url = URL.createObjectURL(blob);

		// // Create download link
		// const a = document.createElement('a');
		// a.href = url;
		// a.download = `post-${Date()}.json`;
		// document.body.appendChild(a);
		// a.click();
		// document.body.removeChild(a);
		// URL.revokeObjectURL(url);

		// Reset form
		setOpenModal(false);
		setPostContent("");
		setSelectedMedia([]);
		setDocuments([]);
		setTags([]);
	};

	const toggleTagInput = () => {

		setShowTagInput(!showTagInput);
	};


	return (
		<div className="flex flex-col items-center">
			{/* Hidden file input outside the modal so it's always in the DOM */}
			<input
				type="file"
				ref={mediaInputRef}
				onChange={handleMediaChange}
				accept="image/*,video/*"
				multiple
				className="hidden"
			/>
			<input
				type="file"
				ref={ documentInputRef }
				onChange={ handleDocumentChange }
				accept=".pdf,.doc,.docx,.ppt,.pptx,.csv,.txt,.xls,.xlsx"
				multiple
				className="hidden"
			/>

			<div className="border pt-4 px-2 rounded-xl max-w-lg bg-white w-full">
				<div className="flex items-center space-x-2 p-4">
					<img
						src={user.photoURL}
						alt={user.displayName}
						className="rounded-full w-10 h-10 cursor-pointer"
						title={user.displayName}
					/>
					<button
						className="flex-grow bg-gray-100 rounded-full py-2 px-4 text-left text-gray-500 hover:bg-gray-200 focus:outline-none cursor-text"
						onClick={handleOpenModal}
					>
						What's on your mind?
					</button>
				</div>
				<div className="flex justify-around items-center border-t py-2">
					<button className="flex items-center space-x-2 hover:bg-gray-100 rounded-md py-2 px-4 focus:outline-none"
						onClick={ () => { triggerDocumentInput();
						}}>
						<PaperClipIcon className="h-5 w-5 text-primary" />
						<span>Attach Document</span>
					</button>
					<button
						className="flex items-center space-x-2 hover:bg-gray-100 rounded-md py-2 px-4 focus:outline-none"
						onClick={() => {
							triggerMediaInput();
						}}
					>
						<PhotoIcon className="h-5 w-5 text-primary" />
						<span>Photo/Video</span>
					</button>
					
				</div>
			</div>

			{openModal && (
				<div
					className="fixed z-10 inset-0 overflow-y-auto"
					onClick={handleOutsideClick}
				>
					<div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
						<div
							className="fixed inset-0 transition-opacity"
							aria-hidden="true"
						>
							<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
						</div>

						<span
							className="hidden sm:inline-block sm:align-middle sm:h-screen"
							aria-hidden="true"
						>
							&#8203;
						</span>

						<div
							className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
							ref={modalContentRef}
							onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
						>
							<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
								{/* Header with privacy setting */}
								<div className="flex justify-between items-center border-b pb-3">
									<h3 className="text-lg leading-6 font-medium text-gray-900">
										Create Post
									</h3>
									<div className="flex items-center space-x-2">
										<GlobeAltIcon className="h-4 w-4 text-gray-500" />
										<select
											className="text-sm border-0 focus:ring-0 text-gray-600 font-medium"
											value={privacy}
											onChange={(e) =>
												setPrivacy(e.target.value)
											}
										>
											<option>Public</option>
											<option>Friends</option>
											<option>Only me</option>
										</select>
									</div>
								</div>

								{/* User info */}
								<div className="flex items-center space-x-2 mt-4">
									<img
										src={user.photoURL}
										alt="Profile"
										className="rounded-full w-10 h-10"
									/>
									<div className="font-medium">
										{user.displayName}
									</div>
								</div>

								{/* Post content */}
								<div className="mt-4">
									<textarea
										className="w-full border-1 border-primary rounded-lg focus:ring-0 text-lg"
										rows="5"
										placeholder="What's on your mind?"
										value={postContent}
										onChange={handleContentChange}
										onFocus={(e) =>
											(e.target.placeholder = "")
										}
									></textarea>

									{/* tags section */}
									{showTagInput && (
										<div className="mt-3">
											<InputTag
											tags={Tags}
											onTagsChange={setTags}
											/>
										</div>
									)}

                                    {/* Show tags if they exist and tag input is not showing */ }
                                    { !showTagInput && Tags.length > 0 && (
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            { Tags.map((tag, index) => (
                                                <span
                                                    key={ index }
                                                    className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded-md"
                                                >
                                                    #{ tag }
                                                </span>
                                            )) }
                                        </div>
                                    ) }
								</div>

								{/* Media preview */}
								{selectedMedia.length > 0 && (
									<div className="mt-3 grid grid-cols-2 gap-2">
										{selectedMedia.map((file, index) => (
											<div
												key={index}
												className="relative"
											>
												{file.type === "image" ? (
													<img
														src={file.preview}
														alt={file.name}
														title={file.name}
														className="rounded-lg w-full h-32 object-cover"
													/>
												) : (
													<video
														src={file.preview}
														title={file.name}
														className="rounded-lg w-full h-32 object-cover"
													/>
												)}
												<button
													className="absolute top-1 right-1 bg-gray-800 bg-opacity-70 rounded-full p-1"
													onClick={() =>
														removeFile(index)
													}
												>
													<XMarkIcon className="h-4 w-4 text-white" />
												</button>
											</div>
										))}
									</div>
								)}

								{/* document preview */ }
								{ documents.length > 0 && (
									<div className="mt-3 grid grid-cols-2 gap-2">
										{ documents.map((doc, index) => (
											<div key={ index } className="relative bg-gray-50 rounded-lg p-3 border">
												<div className="flex items-center space-x-3">
													{ getDocumentIcon(doc.extension) }

													<div className="flex-1 min-w-0">
														{/* Filename with truncation */ }
														<p className="font-medium text-sm truncate" title={ doc.name }>
															{ doc.name }
														</p>

														{/* File size and type */ }
														<p className="text-xs text-gray-500">
															{ formatFileSize(doc.size) } • { doc.extension }
														</p>
													</div>
												</div>

												{/* Remove button */ }
												<button
													className="absolute top-1 right-1 bg-gray-800 bg-opacity-70 rounded-full p-1"
													onClick={ () => removeDocument(index) }
													title="Remove document"
												>
													<XMarkIcon className="h-4 w-4 text-white" />
												</button>
											</div>
										)) }
									</div>
								) }


								{/* Add to post section */}
								<div className="mt-4 border rounded-lg p-3">
									<div className="flex justify-between items-center">
										<div className="font-medium text-gray-700">
											Add to your post
										</div>
										<div className="flex space-x-2">
											<button
												className="p-2 rounded-full hover:bg-gray-100"
												onClick={triggerMediaInput}
												title="Add photos or videos"
											>
												<PhotoIcon className="h-6 w-6 text-primary" />
											</button>
											<button
												className="p-2 rounded-full hover:bg-gray-100"
												title="Add Tags"
												onClick={toggleTagInput}
											>
												<TagIcon className="h-6 w-6 text-primary" />
											</button>
											<button
												className="p-2 rounded-full hover:bg-gray-100"
												title="Attach Document"
												onClick={ triggerDocumentInput }
											>
												<PaperClipIcon className="h-5 w-5 text-primary" />
											</button>
											<button
												className="p-2 rounded-full hover:bg-gray-100"
												title="Tag friends"
											>
												<UserGroupIcon className="h-6 w-6 text-primary" />
											</button>
										</div>
									</div>
								</div>
							</div>

							{/* Actions - only Post button */}
							<div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-center">
								<Button
									color="primary"
									className="px-8"
									disabled={
										!postContent.trim() &&
										selectedMedia.length === 0 && documents.length === 0
									}
									onClick={handleSubmit}
								>
									Post
								</Button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
