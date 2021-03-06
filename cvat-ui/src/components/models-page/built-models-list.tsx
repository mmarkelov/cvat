import React from 'react';

import {
    Row,
    Col,
} from 'antd';

import Text from 'antd/lib/typography/Text';

import BuiltModelItemComponent from './built-model-item';
import { Model } from '../../reducers/interfaces';

interface Props {
    models: Model[];
}

export default function IntegratedModelsListComponent(props: Props) {
    const items = props.models.map((model) =>
        <BuiltModelItemComponent key={model.name} model={model}/>
    );

    return (
        <>
            <Row type='flex' justify='center' align='middle'>
                <Col md={22} lg={18} xl={16} xxl={14}>
                    <Text className='cvat-black-color' strong>Primary</Text>
                </Col>
            </Row>
            <Row type='flex' justify='center' align='middle'>
                <Col md={22} lg={18} xl={16} xxl={14} className='cvat-models-list'>
                <Row type='flex' align='middle' style={{padding: '10px'}}>
                        <Col span={4} xxl={3}>
                            <Text strong>{'Framework'}</Text>
                        </Col>
                        <Col span={6} xxl={7}>
                            <Text strong>{'Name'}</Text>
                        </Col>
                        <Col span={5} offset={7}>
                            <Text strong>Labels</Text>
                        </Col>
                    </Row>
                    { items }
                </Col>
            </Row>
        </>
    );
}
