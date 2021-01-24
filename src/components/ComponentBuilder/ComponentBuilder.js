import React from 'react';
import BoxComponent from './BoxComponent';
import ButtonComponent from './ButtonComponent';
import Heading1Component from './Heading1Component';
import Heading2Component from './Heading2Component';
import LinkComponent from './LinkComponent';
import ListComponent from './ListComponent';
import ModalComponent from './ModalComponent';
import ParagraphComponent from './ParagraphComponent';

const ComponentBuilder = ({ component, id }) => {

    const getComponent = () => {
        switch (component.Content.type) {
            case 'H1Component':
                return <Heading1Component {...component.Content.props} id={id} />
            case 'H2Component':
                return <Heading2Component {...component.Content.props} id={id} />
            case 'ParagraphComponent':
                return <ParagraphComponent {...component.Content.props} id={id} />
            case 'ListComponent':
                return <ListComponent {...component.Content.props} id={id} />
            case 'ButtonComponent':
                return <ButtonComponent {...component.Content.props} id={id} />
            case 'LinkComponent':
                return <LinkComponent {...component.Content.props} id={id} />
            case 'BoxComponent':
                return <BoxComponent {...{ ...component.Content.props, children: component.Children }} id={id} />
            case 'ModalComponent':
                return <ModalComponent {...{ ...component.Content.props, children: component.Children }} id={id} />
            default:
                return;
        }
    }
    return getComponent()
}

export default ComponentBuilder;