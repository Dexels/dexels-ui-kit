# How to use the Tooltip component

The Tooltip component accepts 4 properties:<br/>
1. elevation<br/>
2. position<br/>
3. transitionDuration<br/>
4. transitionEasing<br/>

None of the above is required, all of them have default values. By setting the position you can change the default position(bottom) that
the tooltip should be rendered if there are no placement restrictions(too close to top/right/bottom/left). If restrictions apply, the tooltip
is being rendered wherever it fits better.<br/>

Each component that has a tooltip can specify in its props the tooltip title, if it has delay or not and the position that the specific tooltip
should have. These properties are the following respectively:<br/>
1. data-tooltip-component<br/>
2. data-tooltip-delay<br/>
3. data-tooltip-position<br/>


The `data-tooltip-delay` can be either true or false, if not specified then it is false and the tooltip gets hidden when not hovering on the corresponding component.
The `data-tooltip-position` can be set to one of the available positions (TOP/RIGHT/BOTTOM/LEFT) if you wish the tooltip to render to a different position than
the default or chosen one that the Tooltip component has as described previously.
