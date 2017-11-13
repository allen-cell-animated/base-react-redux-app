import * as React from "react";
import { connect } from "react-redux";

import NavTab from "../../components/NavTab";
import { NavigationTab } from "../../constants";
import {
    metadata,
    selections,
    State,
} from "../../state";

interface SidebarProps {
    className?: string;
    requestMetadata: () => any;
    selectNavTab: (payload: any) => any;
    selectedNavTab: NavigationTab;
}

class Sidebar extends React.Component<SidebarProps, {}> {
    public constructor(props: SidebarProps) {
        super(props);

        this.onNavTabChange = this.onNavTabChange.bind(this);
    }

    public componentDidMount() {
        this.props.requestMetadata();
    }

    public onNavTabChange(selection: NavigationTab) {
        this.props.selectNavTab(selection);
    }

    public render() {
        const {
            className,
            selectedNavTab,
        } = this.props;

        return (
            <section className={className}>
                <NavTab
                    onChange={this.onNavTabChange}
                    selectedNavTab={selectedNavTab}
                />
            </section>
        );
    }
}

function mapStateToProps(state: State) {
    return {
        selectedNavTab: selections.selectors.getNavTab(state),
    };
}

const dispatchToPropsMap = {
    requestMetadata: metadata.actions.requestCellModelMetadata,
    selectNavTab: selections.actions.selectNavTab,
};

export default connect(mapStateToProps, dispatchToPropsMap)(Sidebar);
