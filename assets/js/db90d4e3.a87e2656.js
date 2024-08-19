"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5137],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8339:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_label:"tune",title:"tune.tune"},o=void 0,l={unversionedId:"reference/tune/tune",id:"reference/tune/tune",isDocsHomePage:!1,title:"tune.tune",description:"ExperimentAnalysis Objects",source:"@site/docs/reference/tune/tune.md",sourceDirName:"reference/tune",slug:"/reference/tune/tune",permalink:"/FLAML/docs/reference/tune/tune",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/reference/tune/tune.md",tags:[],version:"current",frontMatter:{sidebar_label:"tune",title:"tune.tune"},sidebar:"referenceSideBar",previous:{title:"trial_runner",permalink:"/FLAML/docs/reference/tune/trial_runner"},next:{title:"utils",permalink:"/FLAML/docs/reference/tune/utils"}},s=[{value:"ExperimentAnalysis Objects",id:"experimentanalysis-objects",children:[{value:"best_iteration",id:"best_iteration",children:[],level:4},{value:"report",id:"report",children:[],level:4},{value:"run",id:"run",children:[],level:4}],level:2},{value:"Tuner Objects",id:"tuner-objects",children:[],level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"experimentanalysis-objects"},"ExperimentAnalysis Objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class ExperimentAnalysis(EA)\n")),(0,i.kt)("p",null,"Class for storing the experiment results."),(0,i.kt)("h4",{id:"best_iteration"},"best","_","iteration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef best_iteration() -> List[str]\n")),(0,i.kt)("p",null,"Help better navigate"),(0,i.kt)("h4",{id:"report"},"report"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def report(_metric=None, **kwargs)\n")),(0,i.kt)("p",null,"A function called by the HPO application to report final or intermediate\nresults."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import time\nfrom flaml import tune\n\ndef compute_with_config(config):\n    current_time = time.time()\n    metric2minimize = (round(config['x'])-95000)**2\n    time2eval = time.time() - current_time\n    tune.report(metric2minimize=metric2minimize, time2eval=time2eval)\n\nanalysis = tune.run(\n    compute_with_config,\n    config={\n        'x': tune.lograndint(lower=1, upper=1000000),\n        'y': tune.randint(lower=1, upper=1000000)\n    },\n    metric='metric2minimize', mode='min',\n    num_samples=1000000, time_budget_s=60, use_ray=False)\n\nprint(analysis.trials[-1].last_result)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_metric")," - Optional default anonymous metric for ",(0,i.kt)("inlineCode",{parentName:"li"},"tune.report(value)"),".\n(For compatibility with ray.tune.report)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"**kwargs")," - Any key value pair to be reported.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Raises"),":"),(0,i.kt)("p",null,"  StopIteration (when not using ray, i.e., _use_ray=False):\nA StopIteration exception is raised if the trial has been signaled to stop.\nSystemExit (when using ray):\nA SystemExit exception is raised if the trial has been signaled to stop by ray."),(0,i.kt)("h4",{id:"run"},"run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def run(evaluation_function, config: Optional[dict] = None, low_cost_partial_config: Optional[dict] = None, cat_hp_cost: Optional[dict] = None, metric: Optional[str] = None, mode: Optional[str] = None, time_budget_s: Union[int, float] = None, points_to_evaluate: Optional[List[dict]] = None, evaluated_rewards: Optional[List] = None, resource_attr: Optional[str] = None, min_resource: Optional[float] = None, max_resource: Optional[float] = None, reduction_factor: Optional[float] = None, scheduler=None, search_alg=None, verbose: Optional[int] = 2, local_dir: Optional[str] = None, num_samples: Optional[int] = 1, resources_per_trial: Optional[dict] = None, config_constraints: Optional[List[Tuple[Callable[[dict], float], str, float]]] = None, metric_constraints: Optional[List[Tuple[str, str, float]]] = None, max_failure: Optional[int] = 100, use_ray: Optional[bool] = False, use_spark: Optional[bool] = False, use_incumbent_result_in_evaluation: Optional[bool] = None, log_file_name: Optional[str] = None, lexico_objectives: Optional[dict] = None, force_cancel: Optional[bool] = False, n_concurrent_trials: Optional[int] = 0, mlflow_exp_name: Optional[str] = None, automl_info: Optional[Tuple[float]] = None, extra_tag: Optional[dict] = None, **ray_args, ,)\n")),(0,i.kt)("p",null,"The function-based way of performing HPO."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import time\nfrom flaml import tune\n\ndef compute_with_config(config):\n    current_time = time.time()\n    metric2minimize = (round(config['x'])-95000)**2\n    time2eval = time.time() - current_time\n    tune.report(metric2minimize=metric2minimize, time2eval=time2eval)\n    # if the evaluation fails unexpectedly and the exception is caught,\n    # and it doesn't inform the goodness of the config,\n    # return {}\n    # if the failure indicates a config is bad,\n    # report a bad metric value like np.inf or -np.inf\n    # depending on metric mode being min or max\n\nanalysis = tune.run(\n    compute_with_config,\n    config={\n        'x': tune.lograndint(lower=1, upper=1000000),\n        'y': tune.randint(lower=1, upper=1000000)\n    },\n    metric='metric2minimize', mode='min',\n    num_samples=-1, time_budget_s=60, use_ray=False)\n\nprint(analysis.trials[-1].last_result)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"evaluation_function")," - A user-defined evaluation function.\nIt takes a configuration as input, outputs a evaluation\nresult (can be a numerical value or a dictionary of string\nand numerical value pairs) for the input configuration.\nFor machine learning tasks, it usually involves training and\nscoring a machine learning model, e.g., through validation loss."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config")," - A dictionary to specify the search space."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"low_cost_partial_config")," - A dictionary from a subset of\ncontrolled dimensions to the initial low-cost values.\ne.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"{'n_estimators': 4, 'max_leaves': 4}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cat_hp_cost")," - A dictionary from a subset of categorical dimensions\nto the relative cost of each choice.\ne.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"{'tree_method': [1, 1, 2]}"),"\ni.e., the relative cost of the\nthree choices of 'tree_method' is 1, 1 and 2 respectively"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metric")," - A string of the metric name to optimize for."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mode")," - A string in ","['min', 'max']"," to specify the objective as\nminimization or maximization."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"time_budget_s")," - int or float | The time budget in seconds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"points_to_evaluate")," - A list of initial hyperparameter\nconfigurations to run first."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"evaluated_rewards")," ",(0,i.kt)("em",{parentName:"li"},"list")," - If you have previously evaluated the\nparameters passed in as points_to_evaluate you can avoid\nre-running those trials by passing in the reward attributes\nas a list so the optimiser can be told the results without\nneeding to re-compute the trial. Must be the same or shorter length than\npoints_to_evaluate.\ne.g.,")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'points_to_evaluate = [\n    {"b": .99, "cost_related": {"a": 3}},\n    {"b": .99, "cost_related": {"a": 2}},\n]\nevaluated_rewards = [3.0]\n')),(0,i.kt)("p",null,"  means that you know the reward for the first config in\npoints_to_evaluate is 3.0 and want to inform run()."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resource_attr"),' - A string to specify the resource dimension used by\nthe scheduler via "scheduler".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"min_resource")," - A float of the minimal resource to use for the resource_attr."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_resource")," - A float of the maximal resource to use for the resource_attr."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reduction_factor")," - A float of the reduction factor used for incremental\npruning."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scheduler")," - A scheduler for executing the experiment. Can be None, 'flaml',\n'asha' (or  'async_hyperband', 'asynchyperband') or a custom instance of the TrialScheduler class. Default is None:\nin this case when resource_attr is provided, the 'flaml' scheduler will be\nused, otherwise no scheduler will be used. When set 'flaml', an\nauthentic scheduler implemented in FLAML will be used. It does not\nrequire users to report intermediate results in evaluation_function.\nFind more details about this scheduler in this paper\n",(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/1911.04706.pdf"},"https://arxiv.org/pdf/1911.04706.pdf"),').\nWhen set \'asha\', the input for arguments "resource_attr",\n"min_resource", "max_resource" and "reduction_factor" will be passed\nto ASHA\'s "time_attr",  "max_t", "grace_period" and "reduction_factor"\nrespectively. You can also provide a self-defined scheduler instance\nof the TrialScheduler class. When \'asha\' or self-defined scheduler is\nused, you usually need to report intermediate results in the evaluation\nfunction via \'tune.report()\'.\nIf you would like to do some cleanup opearation when the trial is stopped\nby the scheduler, you can catch the ',(0,i.kt)("inlineCode",{parentName:"li"},"StopIteration")," (when not using ray)\nor ",(0,i.kt)("inlineCode",{parentName:"li"},"SystemExit")," (when using ray) exception explicitly,\nas shown in the following example.\nPlease find more examples using different types of schedulers\nand how to set up the corresponding evaluation functions in\ntest/tune/test_scheduler.py, and test/tune/example_scheduler.py.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def easy_objective(config):\n    width, height = config["width"], config["height"]\n    for step in range(config["steps"]):\n        intermediate_score = evaluation_fn(step, width, height)\n        try:\n            tune.report(iterations=step, mean_loss=intermediate_score)\n        except (StopIteration, SystemExit):\n            # do cleanup operation here\n            return\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"search_alg")," - An instance/string of the search algorithm\nto be used. The same instance can be used for iterative tuning.\ne.g.,")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from flaml import BlendSearch\nalgo = BlendSearch(metric='val_loss', mode='min',\n        space=search_space,\n        low_cost_partial_config=low_cost_partial_config)\nfor i in range(10):\n    analysis = tune.run(compute_with_config,\n        search_alg=algo, use_ray=False)\n    print(analysis.trials[-1].last_result)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"verbose")," - 0, 1, 2, or 3. If ray or spark backend is used, their verbosity will be\naffected by this argument. 0 = silent, 1 = only status updates,\n2 = status and brief trial results, 3 = status and detailed trial results.\nDefaults to 2.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"local_dir")," - A string of the local dir to save ray logs if ray backend is\nused; or a local dir to save the tuning log.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"num_samples")," - An integer of the number of configs to try. Defaults to 1.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"resources_per_trial")," - A dictionary of the hardware resources to allocate\nper trial, e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"{'cpu': 1}"),". It is only valid when using ray backend\n(by setting 'use_ray = True'). It shall be used when you need to do\n",(0,i.kt)("a",{parentName:"p",href:"/docs/Use-Cases/Tune-User-Defined-Function#parallel-tuning"},"parallel tuning"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"config_constraints")," - A list of config constraints to be satisfied.\ne.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"config_constraints = [(mem_size, '<=', 1024**3)]")),(0,i.kt)("p",{parentName:"li"},"mem_size is a function which produces a float number for the bytes\nneeded for a config.\nIt is used to skip configs which do not fit in memory.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"metric_constraints")," - A list of metric constraints to be satisfied.\ne.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"['precision', '>=', 0.9]"),'. The sign can be ">=" or "<=".')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"max_failure")," - int | the maximal consecutive number of failures to sample\na trial before the tuning is terminated.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"use_ray")," - A boolean of whether to use ray as the backend.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"use_spark")," - A boolean of whether to use spark as the backend.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"log_file_name")," - A string of the log file name. Default to None.\nWhen set to None:\nif local_dir is not given, no log file is created;\nif local_dir is given, the log file name will be autogenerated under local_dir.\nOnly valid when verbose > 0 or use_ray is True.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"lexico_objectives")," - dict, default=None | It specifics information needed to perform multi-objective\noptimization with lexicographic preferences. When lexico_objectives is not None, the arguments metric,\nmode, will be invalid, and flaml's tune uses CFO\nas the ",(0,i.kt)("inlineCode",{parentName:"p"},"search_alg"),", which makes the input (if provided) `search_alg' invalid.\nThis dictionary shall contain the following fields of key-value pairs:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'"metrics":  a list of optimization objectives with the orders reflecting the priorities/preferences of the\nobjectives.'),(0,i.kt)("li",{parentName:"ul"},'"modes" (optional): a list of optimization modes (each mode either "min" or "max") corresponding to the\nobjectives in the metric list. If not provided, we use "min" as the default mode for all the objectives.'),(0,i.kt)("li",{parentName:"ul"},'"targets" (optional): a dictionary to specify the optimization targets on the objectives. The keys are the\nmetric names (provided in "metric"), and the values are the numerical target values.'),(0,i.kt)("li",{parentName:"ul"},'"tolerances" (optional): a dictionary to specify the optimality tolerances on objectives. The keys are the metric names (provided in "metrics"), and the values are the absolute/percentage tolerance in the form of numeric/string.\nE.g.,')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'lexico_objectives = {\n    "metrics": ["error_rate", "pred_time"],\n    "modes": ["min", "min"],\n    "tolerances": {"error_rate": 0.01, "pred_time": 0.0},\n    "targets": {"error_rate": 0.0},\n}\n')),(0,i.kt)("p",null,"  We also support percentage tolerance.\nE.g.,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'lexico_objectives = {\n    "metrics": ["error_rate", "pred_time"],\n    "modes": ["min", "min"],\n    "tolerances": {"error_rate": "5%", "pred_time": "0%"},\n    "targets": {"error_rate": 0.0},\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"force_cancel")," - boolean, default=False | Whether to forcely cancel the PySpark job if overtime."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mlflow_exp_name")," - str, default=None | The name of the mlflow experiment. This should be specified if\nenable mlflow autologging on Spark. Otherwise it will log all the results into the experiment of the\nsame name as the basename of main entry file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"automl_info")," - tuple, default=None | The information of the automl run. It should be a tuple of (mlflow_log_latency,)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"n_concurrent_trials")," - int, default=0 | The number of concurrent trials when perform hyperparameter\ntuning with Spark. Only valid when use_spark=True and spark is required:\n",(0,i.kt)("inlineCode",{parentName:"li"},"pip install flaml[spark]"),". Please check\n",(0,i.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/latest/api/python/getting_started/install.html"},"here"),"\nfor more details about installing Spark. When tune.run() is called from AutoML, it will be\noverwritten by the value of ",(0,i.kt)("inlineCode",{parentName:"li"},"n_concurrent_trials")," in AutoML. When <= 0, the concurrent trials\nwill be set to the number of executors."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"extra_tag")," - dict, default=None | Extra tags to be added to the mlflow runs created by autologging."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"**ray_args")," - keyword arguments to pass to ray.tune.run().\nOnly valid when use_ray=True.")),(0,i.kt)("h2",{id:"tuner-objects"},"Tuner Objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Tuner()\n")),(0,i.kt)("p",null,"Tuner is the class-based way of launching hyperparameter tuning jobs compatible with Ray Tune 2."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"trainable")," - A user-defined evaluation function.\nIt takes a configuration as input, outputs a evaluation\nresult (can be a numerical value or a dictionary of string\nand numerical value pairs) for the input configuration.\nFor machine learning tasks, it usually involves training and\nscoring a machine learning model, e.g., through validation loss.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"param_space")," - Search space of the tuning job.\nOne thing to note is that both preprocessor and dataset can be tuned here.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"tune_config")," - Tuning algorithm specific configs.\nRefer to ray.tune.tune_config.TuneConfig for more info.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"run_config")," - Runtime configuration that is specific to individual trials.\nIf passed, this will overwrite the run config passed to the Trainer,\nif applicable. Refer to ray.air.config.RunConfig for more info."),(0,i.kt)("p",{parentName:"li"},"Usage pattern:"),(0,i.kt)("p",{parentName:"li"},".. code-block:: python"),(0,i.kt)("p",{parentName:"li"},"from sklearn.datasets import load_breast_cancer"),(0,i.kt)("p",{parentName:"li"},"from ray import tune\nfrom ray.data import from_pandas\nfrom ray.air.config import RunConfig, ScalingConfig\nfrom ray.train.xgboost import XGBoostTrainer\nfrom ray.tune.tuner import Tuner"),(0,i.kt)("p",{parentName:"li"},"def get_dataset():\ndata_raw = load_breast_cancer(as_frame=True)\ndataset_df = data_raw",'["data"]',"\ndataset_df",'["target"]'," = data_raw",'["target"]',"\ndataset = from_pandas(dataset_df)\nreturn dataset"),(0,i.kt)("p",{parentName:"li"},'trainer = XGBoostTrainer(\nlabel_column="target",\nparams={},')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'datasets={"train"')," - get_dataset()},\n)"),(0,i.kt)("p",{parentName:"li"},"param_space = {")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'"scaling_config"')," - ScalingConfig(\nnum_workers=tune.grid_search(","[2, 4]","),\nresources_per_worker={")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'"CPU"')," - tune.grid_search(","[1, 2]","),\n},\n),"),(0,i.kt)("h1",{parentName:"li",id:"you-can-even-grid-search-various-datasets-in-tune"},"You can even grid search various datasets in Tune."),(0,i.kt)("h1",{parentName:"li",id:"datasets-"},'"datasets": {'),(0,i.kt)("h1",{parentName:"li",id:"train-tunegrid_search"},'"train": tune.grid_search('),(0,i.kt)("h1",{parentName:"li",id:"ds1-ds2"},"[ds1, ds2]"),(0,i.kt)("h1",{parentName:"li",id:""},"),"),(0,i.kt)("h1",{parentName:"li",id:"-1"},"},")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'"params"')," - {")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'"objective"'),' - "binary:logistic",')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'"tree_method"'),' - "approx",')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'"eval_metric"')," - ",'["logloss", "error"]',",")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'"eta"')," - tune.loguniform(1e-4, 1e-1),")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'"subsample"')," - tune.uniform(0.5, 1.0),")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'"max_depth"'),' - tune.randint(1, 9),\n},\n}\ntuner = Tuner(trainable=trainer, param_space=param_space,\nrun_config=RunConfig(name="my_tune_run"))\nanalysis = tuner.fit()'),(0,i.kt)("p",{parentName:"li"},"To retry a failed tune run, you can then do"),(0,i.kt)("p",{parentName:"li"},".. code-block:: python"),(0,i.kt)("p",{parentName:"li"},"tuner = Tuner.restore(experiment_checkpoint_dir)\ntuner.fit()"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"experiment_checkpoint_dir")," can be easily located near the end of the\nconsole output of your first failed run."))))}u.isMDXComponent=!0}}]);