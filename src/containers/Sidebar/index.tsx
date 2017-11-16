import * as React from "react";
import { connect } from "react-redux";

import { ListOfMetadata } from "../../state/metadata/types";
import Menu from "../../components/Menu";
import { NavigationTab} from "../../constants";
import NavTab from "../../components/NavTab";

import {
    metadata,
    selections,
    State,
} from "../../state";

interface SidebarProps {
    className?: string;
    requestMetadata: () => any;
    selectNavTab: (payload: any) => any;
    selectedNavTab: string;
    userData: ListOfMetadata;
}

class Sidebar extends React.Component<SidebarProps, {}> {
    public constructor(props: SidebarProps) {
        super(props);

        this.onNavTabChange = this.onNavTabChange.bind(this);
    }

    public componentDidMount() {
        this.props.requestMetadata();
    }

    public onNavTabChange(selection: string) {
        this.props.selectNavTab(selection);
    }

    public renderMenu() {
        if (this.props.selectedNavTab !== NavigationTab.FirstTab || this.props.userData.length === 0) {
            return null;
        }
        return (
            <Menu
                userData={this.props.userData}
            />
        );
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
                {this.renderMenu()}
            </section>
        );
    }
}

function mapStateToProps(state: State) {
    return {
        selectedNavTab: selections.selectors.getNavTab(state),
        userData: metadata.selectors.getUserData(state),
    };
}

const dispatchToPropsMap = {
    requestMetadata: metadata.actions.requestCellModelMetadata,
    selectNavTab: selections.actions.selectNavTab,
};

export default connect(mapStateToProps, dispatchToPropsMap)(Sidebar);
