import { useRouter } from 'next/router'

import Accordion from "../src/components/Accordion/Accordion";
import AppBar from '../src/components/AppBar/AppBar';
 
import {ButtonDefaultProps} from '../src/components/Button/props';
import {ButtonDisabledProps} from '../src/components/Button/props';
import Button from '../src/components/Button/Button';

import {ButtonGroupDefaultProps} from '../src/components/ButtonGroup/props';
import ButtonGroup from '../src/components/ButtonGroup/ButtonGroup';
import SplitButton from '../src/components/ButtonGroup/SplitButton';

import BasicCheckboxes from '../src/components/Checkbox/BasicCheckboxes';
import CheckboxesGroup from '../src/components/Checkbox/CheckboxesGroup';

import FloatingActionButton from '../src/components/FloatingActionButton/FloatingActionButton';

import {DatePickerInlineProps} from '../src/components/DateTimePicker/props';
import {DatePickerDialogProps} from '../src/components/DateTimePicker/props';
import {TimePickerProps} from '../src/components/DateTimePicker/props';
import DatePicker from '../src/components/DateTimePicker/DatePicker';
import TimePicker from '../src/components/DateTimePicker/TimePicker';

import Radio from '../src/components/Radio/Radio';

import SimpleSelect from '../src/components/Select/SimpleSelect';
import DisabledSelect from '../src/components/Select/DisabledSelect';
import MultipleSelect from '../src/components/Select/MultipleSelect';

import Slider from '../src/components/Slider/Slider';
import RangeSlider from '../src/components/Slider/RangeSlider';
import VerticalSlider from '../src/components/Slider/VerticalSlider';

import BasicSwitches from '../src/components/Switch/BasicSwitches';

import SimpleTransferList from '../src/components/TransferList/SimpleTransferList';
import EnhancedTransferList from '../src/components/TransferList/EnhancedTransferList';

import ButtomNavigation from '../src/components/BottomNavigation/ButtomNavigationDefault';

import SimpleBreadcrumbs from '../src/components/Breadcrumbs/SimpleBreadcrumbs';
import RouterBreadcrumbs from '../src/components/Breadcrumbs/RouterBreadcrumbs';

import TemporaryDrawer from '../src/components/Drawers/TemporaryDrawer';
import ResponsiveDrawer from '../src/components/Drawers/ResponsiveDrawer';
import PersistentDrawer from '../src/components/Drawers/PersistentDrawerLeft';
import MiniDrawer from '../src/components/Drawers/MiniDrawer';
import PermanentDrawer from '../src/components/Drawers/PermanentDrawerLeft';
import ClippedDrawer from '../src/components/Drawers/ClippedDrawer';

import Link from '../src/components/Links/SimpleLinks';

import SimpleMenu from '../src/components/Menus/SimpleMenu';
import ContextMenu from '../src/components/Menus/ContextMenu';

import SimpleStepper from '../src/components/Stepper/SimpleStepper';
import MobileStepper from '../src/components/Stepper/MobileStepper';
import StepperWithOption from '../src/components/Stepper/StepperWithOption';
import NonLinearStepper from '../src/components/Stepper/NonLinearStepper';

import TabPanel from '../src/components/Tabs/TabPanel';
import VerticalTab from '../src/components/Tabs/VerticalTab';
import DisabledTab from '../src/components/Tabs/DisabledTab';
import PreventScrollButtons from '../src/components/Tabs/PreventScrollButtons';
import ScrollableTab from '../src/components/Tabs/ScrollableTab';

import CircularIndeterminate from '../src/components/Progress/CircularIndeterminate';
import CircularDeterminate from '../src/components/Progress/CircularDeterminate';
import CircularWithValueLabel from '../src/components/Progress/CircularWithValueLabel';
import LinearIndeterminate from '../src/components/Progress/LinearIndeterminate';
import LinearDeterminate from '../src/components/Progress/LinearDeterminate';
import LinearBuffer from '../src/components/Progress/LinearBuffer';
import LinearWithValueLabel from '../src/components/Progress/LinearWithValueLabel';
import CustomizedProgressBars from '../src/components/Progress/CustomizedProgressBars';
import DelayingAppearance from '../src/components/Progress/DelayingAppearance';

import AlertDialog from '../src/components/Dialog/AlertDialog';
import ConfirmationDialog from '../src/components/Dialog/ConfirmationDialog';
import DialogActions from '../src/components/Dialog/DialogActions';
import FormDialog from '../src/components/Dialog/FormDialog';
import ListItemsDialog from '../src/components/Dialog/ListItemsDialog';
import ScrollableDialog from '../src/components/Dialog/ScrollableDialog';

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
import InsetDividersView from '../src/components/Divider/InsetDividers';
import VerticalDividersView from '../src/components/Divider/VerticalDividers';

import Backdrop from '../src/components/Backdrop/Backdrop';

const PageComponent = () => {
    const router = useRouter()
    console.log(router.query, 'router.query')
    let componentName
    
    if(router.query.component) {
        componentName = router.query.component[0] 
    }

    return <div>
        
        {componentName === 'button_default' && <Button {...ButtonDefaultProps} />}
        {componentName === 'button_disabled' && <Button {...ButtonDisabledProps} />}
       
        {componentName === 'button_group' && <ButtonGroup {...ButtonGroupDefaultProps} />}
        {componentName === 'split_button' && <SplitButton />}

        {componentName === 'basic_checkboxes' && <BasicCheckboxes />}
        {componentName === 'checkboxes_group' && <CheckboxesGroup />}

        {componentName === 'floating_action_button' && <FloatingActionButton />}

        {componentName === 'date_picker_inline' && <DatePicker {...DatePickerInlineProps} />}
        {componentName === 'date_picker_dialog' && <DatePicker {...DatePickerDialogProps} />}
        {componentName === 'time_picker' && <TimePicker {...TimePickerProps} />}

        {componentName === 'radio' && <Radio />}

        {componentName === 'simple_select' && <SimpleSelect />}
        {componentName === 'disabled_select' && <DisabledSelect />}
        {componentName === 'multiple_select' && <MultipleSelect />}

        {componentName === 'slider' && <Slider />}
        {componentName === 'range_slider' && <RangeSlider />}
        {componentName === 'vertical_slider' && <VerticalSlider />}

        {componentName === 'basic_switches' && <BasicSwitches />}

        {componentName === 'simple_transfer_list' && <SimpleTransferList />}
        {componentName === 'enhanced_transfer_list' && <EnhancedTransferList />}


        {componentName === 'button_navigation' && <ButtomNavigation />}

        {componentName === 'simple_breadcrumbs' && <SimpleBreadcrumbs />}
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

        {componentName === 'simple_stepper' && <SimpleStepper />}
        {componentName === 'mobile_stepper' && <MobileStepper />}
        {componentName === 'stepper_with_option' && <StepperWithOption />}
        {componentName === 'non_linear_stepper' && <NonLinearStepper />}

        {componentName === 'tab_panel' && <TabPanel />}
        {componentName === 'vertical_tab' && <VerticalTab />}
        {componentName === 'disabled_tab' && <DisabledTab />}
        {componentName === 'prevent_scroll_buttons' && <PreventScrollButtons />}
        {componentName === 'scrollable_tab' && <ScrollableTab />}

        {componentName === 'circular_indeterminate' && <CircularIndeterminate />}
        {componentName === 'circular_determinate' && <CircularDeterminate />}
        {componentName === 'circular_with_value_label' && <CircularWithValueLabel />}
        {componentName === 'linear_indeterminate' && <LinearIndeterminate />}
        {componentName === 'linear_determinate' && <LinearDeterminate />}
        {componentName === 'linear_buffer' && <LinearBuffer />}
        {componentName === 'linear_with_value_label' && <LinearWithValueLabel />}
        {componentName === 'customized_progress_bars' && <CustomizedProgressBars />}
        {componentName === 'delaying_appearance' && <DelayingAppearance />}

        {componentName === 'alert_dialog' && <AlertDialog />}
        {componentName === 'confirmation_dialog' && <ConfirmationDialog />}
        {componentName === 'form_dialog' && <FormDialog />}
        {componentName === 'list_items_dialog' && <ListItemsDialog />}
        {componentName === 'scrollable_dialog' && <ScrollableDialog />}

        {componentName === 'simple_snackbar' && <SimpleSnackbar />}
        {componentName === 'customized_snackbars' && <CustomizedSnackbars />}
        {componentName === 'positioned_snackbar' && <PositionedSnackbar />}
        {componentName === 'transitions_snackbar' && <TransitionsSnackbar />}
        {componentName === 'consecutive_snackbars' && <ConsecutiveSnackbars />}
        {componentName === 'direction_snackbar' && <DirectionSnackbar />}
        {componentName === 'fab_integration_snackbar' && <FabIntegrationSnackbar />}
        {componentName === 'integration_notistack' && <IntegrationNotistack />}
        {componentName === 'long_text_snackbar' && <LongTextSnackbar />}

        {componentName === 'accordion_surface' && <Accordion />}
        {/* componentName === 'paper_surface' && <Accordion /> */}
        {/*componentName === 'card_surface' && <Accordion /> */}
        {componentName === 'appbar_surface' && <AppBar />}

        {componentName === 'avatar' && <Avatar />}
        {componentName === 'badge' && <Badge />}
        {componentName === 'chips' && <AppBar />}
        {componentName === 'inset_divider' && <InsetDividersView />}
        {componentName === 'vertical_divider' && <VerticalDividersView />}
        {componentName === 'simple_icons' && <AppBar />}
        {componentName === 'color_icons' && <AppBar />}
        {componentName === 'size_icons' && <AppBar />}
        {componentName === 'alarm_icon' && <AppBar />}
        {componentName === 'simple_List' && <AppBar />}
        {componentName === 'checkbox_list' && <AppBar />}
        {componentName === 'pinned_subheader_list' && <AppBar />}
        {componentName === 'simple_table' && <AppBar />}
        {componentName === 'sorted_table' && <AppBar />}
        {componentName === 'paginated_table' && <AppBar />}
        {componentName === 'spanning_table' && <AppBar />}
        {componentName === 'sticky_table' && <AppBar />}
        {componentName === 'tooltip' && <AppBar />}
        {componentName === 'typography' && <AppBar />}



        {componentName === 'backdrop' && <Backdrop />}
       
    </div>

}

export default PageComponent