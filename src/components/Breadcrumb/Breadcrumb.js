import React from 'react';
import './Breadcrumb.scss';
const Breadcrumb = (props) => {
    let newText = '';
    if (props.BreadcrumbTitle) {
        let text = props.BreadcrumbTitle.split(' ');
        let lastWord = text.pop();
        newText =
            text.join(' ') +
            (text.length > 0
                ? `<span class="text-red">${' ' + lastWord}</sapn>`
                : lastWord);
    }
    let imageBlock = '';
    if (props.BreadcrumbImage) {
        imageBlock = (
            <div
                className='breadCrumb-content-wrapper mb-5'
                style={{
                    background: `url(${props.BreadcrumbImage})no-repeat center center/cover`,
                }}
                dangerouslySetInnerHTML={{
                    __html: "<h2 class='text-white'>" + newText + '</h2>',
                }}></div>
        );
    }
    let vidoeBlock = '';
    if (props.video) {
        vidoeBlock = (
            <div className='video_bread_crumb_wrapper mb-5'>
                <div
                    dangerouslySetInnerHTML={{
                        __html: "<h2 class='text-white'>" + newText + '</h2>',
                    }}></div>
                <video autoPlay loop muted className='video_bg '>
                    <source src={props.video} />
                </video>
            </div>
        );
    }

    return (
        <>
            {imageBlock}
            {vidoeBlock}
        </>
    );
};

export default Breadcrumb;
