import React from 'react';

const AppIcon = ({ iconName, customClass }) => <i className={`${iconName} ${customClass || ''}`} />;

export default AppIcon;
