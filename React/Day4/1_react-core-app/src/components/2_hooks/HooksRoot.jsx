/* eslint-disable */

import React from 'react';
import StateHookDemo from './1_StateHookDemo';
import EffectHookDemo from './2_EffectHookDemo';
import CounterAssignment from './3_CounterAssignment';
import ReducerHookDemo from './4_ReducerHook';
import ContextHookDemo from './5_ContextHook';
import CounterRoot from './code-structuring/CounterRoot';

const HooksRoot = () => {
    return (
        <div>
            {/* <StateHookDemo /> */}
            {/* <EffectHookDemo /> */}
            {/* <CounterAssignment /> */}
            {/* <ContextHookDemo /> */}
            <CounterRoot />
        </div>
    );
};

export default HooksRoot;