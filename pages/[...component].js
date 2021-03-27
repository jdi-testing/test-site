import { useRouter } from 'next/router'

import Accordion from "../src/components/Accordion/Accordion";
import AppBar from '../src/components/AppBar/AppBar';
import Paper from '../src/components/Paper/Paper';
import Card from '../src/components/Card/Card';

import Button from '../src/components/Button/Button';
import ButtonGroup from '../src/components/ButtonGroup/ButtonGroup';

import Checkbox from '../src/components/Checkbox/Checkbox';

import FloatingActionButton from '../src/components/FloatingActionButton/FloatingActionButton';

import DatePicker from '../src/components/DateTimePicker/DatePicker';

import Radio from '../src/components/Radio/Radio';

import Selects from '../src/components/Select/Selects';

import Sliders from '../src/components/Slider/Sliders';

import BasicSwitches from '../src/components/Switch/BasicSwitches';
import TextField from '../src/components/TextField/TextField';

import SimpleTransferList from '../src/components/TransferList/SimpleTransferList';
import EnhancedTransferList from '../src/components/TransferList/EnhancedTransferList';

import ButtomNavigation from '../src/components/BottomNavigation/ButtomNavigationDefault';

import Breadcrumbs from '../src/components/Breadcrumbs/Breadcrumbs';
import RouterBreadcrumbs from "../src/components/Breadcrumbs/RouterBreadcrumbs";

import TemporaryDrawer from '../src/components/Drawers/TemporaryDrawer';
import ResponsiveDrawer from '../src/components/Drawers/ResponsiveDrawer';
import PersistentDrawer from '../src/components/Drawers/PersistentDrawerLeft';
import MiniDrawer from '../src/components/Drawers/MiniDrawer';
import PermanentDrawer from '../src/components/Drawers/PermanentDrawerLeft';
import ClippedDrawer from '../src/components/Drawers/ClippedDrawer';

import Link from '../src/components/Links/SimpleLinks';

import SimpleMenu from '../src/components/Menus/SimpleMenu';
import ContextMenu from '../src/components/Menus/ContextMenu';
import Steppers from '../src/components/Stepper/Steppers';
import Tabs from '../src/components/Tabs/Tabs';

import Progresses from "../src/components/Progress/Progress";
import Dialogs from "../src/components/Dialog/Dialogs";
import Snackbars from "../src/components/Snackbar/Snackbars";

import SimpleSnackbar from '../src/components/Snackbar/SimpleSnackbar';
import CustomizedSnackbars from '../src/components/Snackbar/CustomizedSnackbars';
import PositionedSnackbar from '../src/components/Snackbar/PositionedSnackbar';
import TransitionsSnackbar from '../src/components/Snackbar/TransitionsSnackbar';
import ConsecutiveSnackbars from '../src/components/Snackbar/ConsecutiveSnackbars';
import DirectionSnackbar from '../src/components/Snackbar/DirectionSnackbar';
import FabIntegrationSnackbar from '../src/components/Snackbar/FabIntegrationSnackbar';
import IntegrationNotistack from '../src/components/Snackbar/IntegrationNotistack';
import LongTextSnackbar from '../src/components/Snackbar/LongTextSnackbar';

import Avatar from '../src/components/Avatar/Avatar';
import Badge from '../src/components/Badge/Badge';
import Chips from '../src/components/Chip/Chips';
import InsetDividersView from '../src/components/Divider/InsetDividers';
import VerticalDividersView from '../src/components/Divider/VerticalDividers';
import Lists from '../src/components/Lists/Lists';
import Table from '../src/components/Table/Table';
import Tooltip from '../src/components/Tooltip/Tooltip';
import Typography from '../src/components/Typography/Typography';

import Box from '../src/components/Box/Box';
import Container from '../src/components/Container/Container';
import Grid from '../src/components/Grid/Grid';
import GridList from '../src/components/GridList/GridList';
import Hidden from '../src/components/Hidden/Hidden';

import ClickAwayListener from '../src/components/ClickAwayListner/ClickAwayListener';
import SimpleModal from "../src/components/Modal/SimpleModal";
import Popover from "../src/components/Popover/Popover"
import PositionedPopper from "../src/components/Popper/PositionedPopper"
import Portal from "../src/components/Portal/Portal"
import TextareaAutosize from "../src/components/TextareaAutosize/TextareaAutosize"
import Transitions from "../src/components/Transitions/Transitions"
import UseMediaQuery from "../src/components/UseMediaQuery/UseMediaQuery"


import Backdrop from '../src/components/Backdrop/Backdrop';


const PageComponent = () => {
    const router = useRouter()
    console.log(router.query, 'router.query')
    let componentName
    
    if(router.query.component) {
        componentName = router.query.component[0] 
    }

    return <div>
        
        {componentName === 'buttons' && <Button />}
        {componentName === 'button_groups' && <ButtonGroup />}
        {componentName === 'checkboxes' && <Checkbox />}
        {componentName === 'floating_action_button' && <FloatingActionButton />}
        {componentName === 'date_picker' && <DatePicker />}
        {componentName === 'radio' && <Radio />}
        {componentName === 'selects' && <Selects />}
        {componentName === 'sliders' && <Sliders />}

        {componentName === 'basic_switches' && <BasicSwitches />}
        {componentName === 'text_field' && <TextField />}

        {componentName === 'simple_transfer_list' && <SimpleTransferList />}
        {componentName === 'enhanced_transfer_list' && <EnhancedTransferList />}


        {componentName === 'button_navigation' && <ButtomNavigation />}
        {componentName === 'simple_breadcrumbs' && <Breadcrumbs />}
        {componentName === 'router_breadcrumbs' && <RouterBreadcrumbs />}

        {componentName === 'temporary_drawer' && <TemporaryDrawer />}
        {componentName === 'responsive_drawer' && <ResponsiveDrawer />}
        {componentName === 'persistent_drawer' && <PersistentDrawer />}
        {componentName === 'mini_drawer' && <MiniDrawer />}
        {componentName === 'permanent_drawer' && <PermanentDrawer />}
        {componentName === 'clipped_drawer' && <ClippedDrawer />}

        {componentName === 'link' && <Link />}

        {componentName === 'simple_menu' && <SimpleMenu />}
        {componentName === 'context_menu' && <ContextMenu />}

        {componentName === 'steppers' && <Steppers />}

        {componentName === 'tabs' && <Tabs />}

        {componentName === 'progress' && <Progresses />}

        {componentName === 'dialog' && <Dialogs />}

        {componentName === 'snackbar' && <Snackbars />}
        {componentName === 'backdrop' && <Backdrop />}

        {componentName === 'accordion_surface' && <Accordion />}
        {componentName === 'paper_surface' && <Paper /> }
        {componentName === 'card_surface' && <Card /> }
        {componentName === 'appbar_surface' && <AppBar />}

        {componentName === 'avatar' && <Avatar />}
        {componentName === 'badge' && <Badge />}
        {componentName === 'chips' && <Chips />}
        {componentName === 'inset_divider' && <InsetDividersView />}
        {componentName === 'vertical_divider' && <VerticalDividersView />}
        {componentName === 'simple_icons' && <AppBar />}
        {componentName === 'color_icons' && <AppBar />}
        {componentName === 'size_icons' && <AppBar />}
        {componentName === 'alarm_icon' && <AppBar />}
        {componentName === 'simple_list' && <Lists />}
        {componentName === 'simple_table' && <Table />}
        {componentName === 'tooltip' && <Tooltip />}
        {componentName === 'typography' && <Typography />}

        {componentName === 'box_layout' && <Box />}
        {componentName === 'container_layout' && <Container />}
        {componentName === 'grid_layout' && <Grid />}
        {componentName === 'grid_list_layout' && <GridList />}
        {componentName === 'hidden_layout' && <Hidden />}

        {componentName === 'click_away_listener' && <ClickAwayListener />}
        {componentName === 'modal' && <SimpleModal />}
        {componentName === 'popover' && <Popover />}
        {componentName === 'popper' && <PositionedPopper />}
        {componentName === 'portal' && <Portal />}
        {componentName === 'textarea_autosize' && <TextareaAutosize />}
        {componentName === 'transitions' && <Transitions />}
        {componentName === 'use_media_query' && <UseMediaQuery />}
       
    </div>

}

export default PageComponent