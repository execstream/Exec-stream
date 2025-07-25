/**
 * This configuration was generated using the CKEditor 5 Builder. You can modify it anytime using this link:
 * https://ckeditor.com/ckeditor-5/builder/?redirect=portal#installation/NoJgNARCB0Ds0AYKRCALLAbAzBWAHAMyECMCuAnOiRiPpiNmghWg7mrqoVkSSMggBTAHbIEYYCTASJ06QgC6kAIa5cCFkkVA
 */

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
	ClassicEditor,
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	Autosave,
	BlockQuote,
	Bold,
	Bookmark,
	CKBox,
	CKBoxImageEdit,
	CloudServices,
	Code,
	Emoji,
	Essentials,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	Fullscreen,
	GeneralHtmlSupport,
	Heading,
	Highlight,
	HorizontalLine,
	ImageBlock,
	ImageCaption,
	ImageEditing,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	ImageUtils,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	Mention,
	PageBreak,
	PasteFromOffice,
	PictureEditing,
	RemoveFormat,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Style,
	Subscript,
	Superscript,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	TodoList,
	Underline
} from 'ckeditor5';

import {
	CaseChange,
	ExportPdf,
	ExportWord,
	FormatPainter,
	ImportWord,
	LineHeight,
	MergeFields,
	MultiLevelList,
	PasteFromOfficeEnhanced,
	SlashCommand,
	TableOfContents,
	Template
} from 'ckeditor5-premium-features';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

import './editor.css';

const LICENSE_KEY =
	'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NTM4MzM1OTksImp0aSI6ImNlN2VhYzcyLWZiMTMtNGZiZi04OWMyLWMzODZmYTc3MDhhYiIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjY3YTI0NTZhIn0.Mxc267WUtuYcmZxBC53p8Ooaq5z5_OWiHOKKUxGEG6ALNtOoPkCL1to5Q5ReGjz_Z_fhLv4myPguMuN9Lst0dg';

const CLOUD_SERVICES_TOKEN_URL =
	'https://9awi5g3qjzux.cke-cs.com/token/dev/0c594cd595d210971738213d575eb94e4101474832e0c22bf38b24214761?limit=10';

export default function CustomEditor({ value, onChange, disabled }) {
	const editorRef = useRef(null);
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		setIsReady(true);
		return () => setIsReady(false);
	}, []);

	const { editorConfig } = useMemo(() => {
		if (!isReady) {
			return {};
		}

		return {
			editorConfig: {
				toolbar: {
					items: [
						'undo',
						'redo',
						'|',
						'insertMergeField',
						'previewMergeFields',
						'|',
						'formatPainter',
						'|',
						'heading',
						'style',
						'|',
						'fontSize',
						'fontFamily',
						'fontColor',
						'fontBackgroundColor',
						'|',
						'bold',
						'italic',
						'underline',
						'|',
						'link',
						'insertImage',
						'insertTable',
						'highlight',
						'blockQuote',
						'|',
						'alignment',
						'lineHeight',
						'|',
						'bulletedList',
						'numberedList',
						'multiLevelList',
						'todoList',
						'outdent',
						'indent'
					],
					shouldNotGroupWhenFull: false
				},
				plugins: [
					Alignment,
					Autoformat,
					AutoImage,
					AutoLink,
					Autosave,
					BlockQuote,
					Bold,
					Bookmark,
					CaseChange,
					CKBox,
					CKBoxImageEdit,
					CloudServices,
					Code,
					Emoji,
					Essentials,
					ExportPdf,
					ExportWord,
					FindAndReplace,
					FontBackgroundColor,
					FontColor,
					FontFamily,
					FontSize,
					FormatPainter,
					Fullscreen,
					GeneralHtmlSupport,
					Heading,
					Highlight,
					HorizontalLine,
					ImageBlock,
					ImageCaption,
					ImageEditing,
					ImageInline,
					ImageInsert,
					ImageInsertViaUrl,
					ImageResize,
					ImageStyle,
					ImageTextAlternative,
					ImageToolbar,
					ImageUpload,
					ImageUtils,
					ImportWord,
					Indent,
					IndentBlock,
					Italic,
					LineHeight,
					Link,
					LinkImage,
					List,
					ListProperties,
					Mention,
					MergeFields,
					MultiLevelList,
					PageBreak,
					PasteFromOffice,
					PasteFromOfficeEnhanced,
					PictureEditing,
					RemoveFormat,
					SlashCommand,
					SpecialCharacters,
					SpecialCharactersArrows,
					SpecialCharactersCurrency,
					SpecialCharactersEssentials,
					SpecialCharactersLatin,
					SpecialCharactersMathematical,
					SpecialCharactersText,
					Strikethrough,
					Style,
					Subscript,
					Superscript,
					Table,
					TableCaption,
					TableCellProperties,
					TableColumnResize,
					TableOfContents,
					TableProperties,
					TableToolbar,
					Template,
					TextTransformation,
					TodoList,
					Underline
				],
				cloudServices: {
					tokenUrl: CLOUD_SERVICES_TOKEN_URL
				},
				exportPdf: {
					stylesheets: [
						'./export-style.css',
						'https://cdn.ckeditor.com/ckeditor5/46.0.0/ckeditor5.css',
						'https://cdn.ckeditor.com/ckeditor5-premium-features/46.0.0/ckeditor5-premium-features.css'
					],
					fileName: 'export-pdf-demo.pdf',
					converterOptions: {
						format: 'Tabloid',
						margin_top: '20mm',
						margin_bottom: '20mm',
						margin_right: '24mm',
						margin_left: '24mm',
						page_orientation: 'portrait'
					}
				},
				exportWord: {
					stylesheets: [
						'./export-style.css',
						'https://cdn.ckeditor.com/ckeditor5/46.0.0/ckeditor5.css',
						'https://cdn.ckeditor.com/ckeditor5-premium-features/46.0.0/ckeditor5-premium-features.css'
					],
					fileName: 'export-word-demo.docx',
					converterOptions: {
						document: {
							orientation: 'portrait',
							size: 'Tabloid',
							margins: {
								top: '20mm',
								bottom: '20mm',
								right: '24mm',
								left: '24mm'
							}
						}
					}
				},
				fontFamily: {
					supportAllValues: true
				},
				fontSize: {
					options: [10, 12, 14, 'default', 18, 20, 22],
					supportAllValues: true
				},
				fullscreen: {
					onEnterCallback: container =>
						container.classList.add(
							'editor-container',
							'editor-container_classic-editor',
							'editor-container_include-style',
							'editor-container_include-fullscreen',
							'main-container'
						)
				},
				heading: {
					options: [
						{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
						{ model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
						{ model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
						{ model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
						{ model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
						{ model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
						{ model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
					]
				},
				htmlSupport: {
					allow: [
						{
							name: /^.*$/,
							styles: true,
							attributes: true,
							classes: true
						}
					]
				},
				image: {
					toolbar: [
						'toggleImageCaption',
						'imageTextAlternative',
						'|',
						'imageStyle:inline',
						'imageStyle:wrapText',
						'imageStyle:breakText',
						'|',
						'resizeImage',
						'|',
						'ckboxImageEdit'
					]
				},
				initialData:
					'<h2>Congratulations on setting up CKEditor 5! 🎉</h2>\n<p>\n\tYou\'ve successfully created a CKEditor 5 project. This powerful text editor\n\twill enhance your application, enabling rich text editing capabilities that\n\tare customizable and easy to use.\n</p>\n<h3>What\'s next?</h3>\n<ol>\n\t<li>\n\t\t<strong>Integrate into your app</strong>: time to bring the editing into\n\t\tyour application. Take the code you created and add to your application.\n\t</li>\n\t<li>\n\t\t<strong>Explore features:</strong> Experiment with different plugins and\n\t\ttoolbar options to discover what works best for your needs.\n\t</li>\n\t<li>\n\t\t<strong>Customize your editor:</strong> Tailor the editor\'s\n\t\tconfiguration to match your application\'s style and requirements. Or\n\t\teven write your plugin!\n\t</li>\n</ol>\n<p>\n\tKeep experimenting, and don\'t hesitate to push the boundaries of what you\n\tcan achieve with CKEditor 5. Your feedback is invaluable to us as we strive\n\tto improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<ul>\n\t<li>📝 <a href="https://portal.ckeditor.com/checkout?plan=free">Trial sign up</a>,</li>\n\t<li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>\n\t<li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li>\n\t<li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>\n\t<li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>\n</ul>\n<h3>Need help?</h3>\n<p>\n\tSee this text, but the editor is not starting up? Check the browser\'s\n\tconsole for clues and guidance. It may be related to an incorrect license\n\tkey if you use premium features or another feature-related requirement. If\n\tyou cannot make it work, file a GitHub issue, and we will help as soon as\n\tpossible!\n</p>\n',
				licenseKey: LICENSE_KEY,
				lineHeight: {
					supportAllValues: true
				},
				link: {
					addTargetToExternalLinks: true,
					defaultProtocol: 'https://',
					decorators: {
						toggleDownloadable: {
							mode: 'manual',
							label: 'Downloadable',
							attributes: {
								download: 'file'
							}
						}
					}
				},
				list: {
					properties: {
						styles: true,
						startIndex: true,
						reversed: true
					}
				},
				mention: {
					feeds: [
						{
							marker: '@',
							feed: []
						}
					]
				},
				menuBar: {
					isVisible: true
				},
				mergeFields: {
					/* Configuration for merge fields if needed */
				},
				placeholder: 'Type or paste your content here!',
				style: {
					definitions: [
						{ name: 'Article category', element: 'h3', classes: ['category'] },
						{ name: 'Title', element: 'h2', classes: ['document-title'] },
						{ name: 'Subtitle', element: 'h3', classes: ['document-subtitle'] },
						{ name: 'Info box', element: 'p', classes: ['info-box'] },
						{ name: 'CTA Link Primary', element: 'a', classes: ['button', 'button--green'] },
						{ name: 'CTA Link Secondary', element: 'a', classes: ['button', 'button--black'] },
						{ name: 'Marker', element: 'span', classes: ['marker'] },
						{ name: 'Spoiler', element: 'span', classes: ['spoiler'] }
					]
				},
				table: {
					contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
				},
				template: {
					definitions: [
						{
							title: 'Introduction',
							description: 'Simple introduction to an article',
							icon: '<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <g id="icons/article-image-right">\n        <rect id="icon-bg" width="45" height="45" rx="2" fill="#A5E7EB"/>\n        <g id="page" filter="url(#filter0_d_1_507)">\n            <path d="M9 41H36V12L28 5H9V41Z" fill="white"/>\n            <path d="M35.25 12.3403V40.25H9.75V5.75H27.7182L35.25 12.3403Z" stroke="#333333" stroke-width="1.5"/>\n        </g>\n        <g id="image">\n            <path id="Rectangle 22" d="M21.5 23C21.5 22.1716 22.1716 21.5 23 21.5H31C31.8284 21.5 32.5 22.1716 32.5 23V29C32.5 29.8284 31.8284 30.5 31 30.5H23C22.1716 30.5 21.5 29.8284 21.5 29V23Z" fill="#B6E3FC" stroke="#333333"/>\n            <path id="Vector 1" d="M24.1184 27.8255C23.9404 27.7499 23.7347 27.7838 23.5904 27.9125L21.6673 29.6268C21.5124 29.7648 21.4589 29.9842 21.5328 30.178C21.6066 30.3719 21.7925 30.5 22 30.5H32C32.2761 30.5 32.5 30.2761 32.5 30V27.7143C32.5 27.5717 32.4391 27.4359 32.3327 27.3411L30.4096 25.6268C30.2125 25.451 29.9127 25.4589 29.7251 25.6448L26.5019 28.8372L24.1184 27.8255Z" fill="#44D500" stroke="#333333" stroke-linejoin="round"/>\n            <circle id="Ellipse 1" cx="26" cy="25" r="1.5" fill="#FFD12D" stroke="#333333"/>\n        </g>\n        <rect id="Rectangle 23" x="13" y="13" width="12" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 24" x="13" y="17" width="19" height="2" rx="1" fill="#B4B4B4"/>\n    </g>\n    <defs>\n        <filter id="filter0_d_1_507" x="7" y="3" width="34" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n            <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n            <feOffset dy="1"/>\n            <feGaussianBlur stdDeviation="2"/>\n            <feComposite in2="hardAlpha" operator="out"/>\n            <feColorMatrix type="matrix" values="0 0 0 0 0.137255 0 0 0 0 0.454902 0 0 0 0 0.462745 0 0 0 0.25 0"/>\n            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_507"/>\n            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_507" result="shape"/>\n        </filter>\n    </defs>\n</svg>'
						}
					]
				}
			}
		};
	}, [isReady]);

	return (
		<>
			{isReady && (
				<CKEditor
					editor={ClassicEditor}
					config={editorConfig}
					data={value}
					disabled={disabled}
					onReady={(editor) => {
						editorRef.current = editor;
					}}
					onChange={(event, editor) => {
						const data = editor.getData();
						onChange(data);
					}}
				/>
			)}
		</>
	);
}
