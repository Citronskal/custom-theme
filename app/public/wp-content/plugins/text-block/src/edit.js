// import { __ } from '@wordpress/i18n';
// import { useBlockProps } from '@wordpress/block-editor';
// import './editor.scss';


// export default function Edit() {
// 	return (
// 		<p { ...useBlockProps() }>
// 			I don't know what I am doing
// 		</p>
// 	);
// }

import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const { text, mediaURL } = attributes;

    return (
        <div {...useBlockProps()}>
            <div style={{ display: 'flex', gap: '20px' }}>
                {/* Text Column */}
                <div style={{ flex: '1' }}>
                    <RichText
                        tagName="p"
                        value={text}
                        onChange={(newText) => setAttributes({ text: newText })}
                        placeholder={__('Enter your text here...', 'my-block')}
                    />
                </div>
                
                {/* Media Column */}
                <div style={{ flex: '1' }}>
                    <MediaUpload
                        onSelect={(media) => setAttributes({ mediaURL: media.url })}
                        allowedTypes={['image', 'video']}
                        render={({ open }) => (
                            <Button onClick={open} variant="primary">
                                {mediaURL ? (
                                    <img src={mediaURL} alt={__('Selected media', 'my-block')} />
                                ) : (
                                    __('Upload Image or Video', 'my-block')
                                )}
                            </Button>
                        )}
                    />
                </div>
            </div>
        </div>
    );
}
